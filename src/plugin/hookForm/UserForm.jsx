import React from "react";
import { Form, Checkbox, Row, Col, Button, Select } from "antd";

const {Option} = Select;

const UserForm = () => {

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form onFinish={onFinish} name="valifsyr_other">
      <Form.Item name="所需服务" label="所需服务">
        <Checkbox.Group>
          <Row>
            <Col span={8}>
              <Checkbox value="A" style={{ lineHeight: "32px" }}>
                A
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="E" style={{ lineHeight: "32px" }}>
                E
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item
        name="country"
      >
        <Select mode="multiple" placeholder="Please select favourite colors">
          <Option value="red">Red</Option>
          <Option value="green">Green</Option>
          <Option value="blue">Blue</Option>
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserForm;
