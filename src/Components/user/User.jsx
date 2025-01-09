import React from 'react';
import { LogoutOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { logout } from '../../libs/store/features/authSlice';
import { useNavigate } from 'react-router-dom';
const User = () => {
    const fullname = useSelector((state) => state.auth.fullname);
    const email = useSelector((state) => state.auth.email);
    const phoneNumber = useSelector((state) => state.auth.phoneNumber);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const items = [
        {
          key: '1',
          label: fullname || "Guest", // Fallback for fullname
          className: 'text-center !font-semibold !text-lg',
          onClick: () => navigate('/profile')
        },
        {
          type: 'divider',
        },
        {
          key: '2',
          label: email,
          icon: <MailOutlined />,
        },
        {
          key: '3',
          label: phoneNumber,
          icon: <PhoneOutlined />,
        },
        {
          key: '4',
          label: 'Logout',
          icon: <LogoutOutlined />,
          onClick: () => dispatch(logout()),
        },
      ];

    return (
        <Dropdown
          className="text-sm"
          menu={{
            items,
          }}
          trigger={['click']}
        >
          <a onClick={(e) => e.preventDefault()} className="flex items-center">
            <Space>
              <FaUserCircle size={20} className="text-primary" />
              <span>{fullname || "Guest"}</span>
            </Space>
          </a>
        </Dropdown>
    );
};

export default User;
