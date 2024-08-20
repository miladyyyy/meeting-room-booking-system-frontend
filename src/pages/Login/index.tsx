import { Button, Form, Input } from 'antd'

const LoginPage: React.FC = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute bottom-[50%] right-[50%] translate-x-[50%] translate-y-[50%]">
        <h1 className="text-2xl">会议室预定系统</h1>

        <Form className="mt-4">
          <Form.Item>
            <Input type="text" placeholder="用户名" />
          </Form.Item>
          <Form.Item>
            <Input type="password" placeholder="密码" />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default LoginPage
