import {Select} from 'antd';
import React from 'react'


export default function MySelect() {
    const users: { label: string, value: string }[] = [
        {label: 'aaa', value: '111'},
        {label: 'bbb', value: '222'},
        {label: 'ccc cc cccc cc cccc', value: '333'},
        {label: 'ddd', value: '444'},
    ]
    return <div>
        Users:
        <Select options={users} dropdownMatchSelectWidth={false} showSearch style={{width: 100}}
                filterOption={(value, option) => option?.label.includes(value) ?? true}
        />
    </div>
};
