import Button,{ ButtonProps } from 'react-bootstrap/Button';

interface IButton {
    variant: string,
    content: string,
    size?: ButtonProps["size"],
    onClick?: any
    style?: any
}

function CustomButton(props: IButton) {
    const { variant, content, onClick, size, style } = props;

return <Button style={style} onClick={onClick} variant={variant} size={size}>{content}</Button>
}

export default CustomButton;