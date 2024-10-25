type Props = {
    content: string;
   }

const Message: React.FC<Props> = ({
    content,
}) =>  {
    return (
        <>
        <div className="answer">
            {content}
        </div>
        </>
    )
}

export default Message;