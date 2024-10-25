type Props = {
    content: string;
   }

const Message: React.FC<Props> = ({
    content,
}) =>  {
    return (
        <>
        <div className="question">
            {content}
        </div>
        </>
    )
}

export default Message;