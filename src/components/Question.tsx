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
        <div className="question" key={key}>
            {content}
        </div>
        </>
    )
}

export default Message;