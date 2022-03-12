type MsgProps = {
    text: string;
}

export function Msg(props: MsgProps) {
  return (
    <p>{props.text}</p>
  );
}