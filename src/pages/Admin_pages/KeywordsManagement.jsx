import React, { useEffect, useState } from 'react';
import axiosClient from '../../api/axios';
import { Button, Input, Table, message } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const KeywordsManagement = () => {
    const [keywords, setKeywords] = useState([]);
    const [newKeyword, setNewKeyword] = useState('');
    const [editingKeyword, setEditingKeyword] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchKeywords();
    }, []);

    const fetchKeywords = async () => {
        try {
            setLoading(true);
            const response = await axiosClient.get('/api/keywords');
            setKeywords(response.data);
        } catch (error) {
            console.error('Error fetching keywords:', error);
        } finally {
            setLoading(false);
        }
    };

    const addKeyword = async () => {
        try {
            const response = await axiosClient.post('/api/keywords', { keyword: newKeyword });
            setKeywords([...keywords, response.data]);
            setNewKeyword('');
            message.success('Keyword added successfully');
        } catch (error) {
            console.error('Error adding keyword:', error);
            message.error('Error adding keyword');
        }
    };

    const updateKeyword = async () => {
        try {
            const response = await axiosClient.put(`/api/keywords/${editingKeyword.id}`, { keyword: editingKeyword.keyword });
            setKeywords(keywords.map(k => (k.id === editingKeyword.id ? response.data : k)));
            setEditingKeyword(null);
            message.success('Keyword updated successfully');
        } catch (error) {
            console.error('Error updating keyword:', error);
            message.error('Error updating keyword');
        }
    };

    const deleteKeyword = async (id) => {
        try {
            await axiosClient.delete(`/api/keywords/${id}`);
            setKeywords(keywords.filter(k => k.id !== id));
            message.success('Keyword deleted successfully');
        } catch (error) {
            console.error('Error deleting keyword:', error);
            message.error('Error deleting keyword');
        }
    };

    return (
        <div>
            <h2>Manage Keywords</h2>
            <Input
                placeholder="New Keyword"
                value={newKeyword}
                onChange={(e) => setNewKeyword(e.target.value)}
                onPressEnter={addKeyword}
                style={{ marginBottom: 10 }}
            />
            <Button onClick={addKeyword} type="primary" style={{ marginBottom: 10 }}>
                Add Keyword
            </Button>
            <Table
                dataSource={keywords}
                loading={loading}
                rowKey="id"
                columns={[
                    {
                        title: 'Keyword',
                        dataIndex: 'keyword',
                        key: 'keyword',
                        render: (text, record) => (
                            editingKeyword && editingKeyword.id === record.id ? (
                                <Input
                                    value={editingKeyword.keyword}
                                    onChange={(e) => setEditingKeyword({ ...editingKeyword, keyword: e.target.value })}
                                    onPressEnter={updateKeyword}
                                />
                            ) : (
                                text
                            )
                        )
                    },
                    {
                        title: 'Actions',
                        key: 'actions',
                        render: (text, record) => (
                            <span>
                                {editingKeyword && editingKeyword.id === record.id ? (
                                    <Button onClick={updateKeyword} type="link">
                                        Save
                                    </Button>
                                ) : (
                                    <Button onClick={() => setEditingKeyword(record)} type="link" icon={<EditOutlined />} />
                                )}
                                <Button onClick={() => deleteKeyword(record.id)} type="link" icon={<DeleteOutlined />} />
                            </span>
                        )
                    }
                ]}
            />
        </div>
    );
};

export default KeywordsManagement;
