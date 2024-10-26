type Props = {
    content: string;
    key: string;
   }

const Message: React.FC<Props> = ({
    content,
    key,
}) =>  {
    return (
        <>
        <div className="answer" key={key}>
            {content}
        </div>
        </>
    )
}

export default Message;