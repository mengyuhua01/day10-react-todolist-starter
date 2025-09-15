import { Modal } from 'antd';
import { Input } from 'antd';
const { TextArea } = Input;

const TodoModal = ({open, todo, setTodo, onOk, onCancel}) => (
    <Modal
        title="编辑 Todo"
        open={open}
        onOk={onOk}
        onCancel={onCancel}
    >
        <TextArea
            value={todo ? todo.text : ""}
            onChange={e => setTodo({...todo, text: e.target.value})}
            placeholder="请输入 todo 内容"
        />
    </Modal>
);

export default TodoModal;
