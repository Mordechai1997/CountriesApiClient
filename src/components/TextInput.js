import Input from '@mui/material/Input';

export default function TextInput({ text, setText }) {

    return (
        <Input
            className="text-input"
            type="text"
            value={text}
            onChange={(e) => setText && setText(e.target.value)}
        />

    );
}
