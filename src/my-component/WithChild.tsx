
interface Props {
    children : React.ReactNode
}

const WithChild = ({ children }: Props) => {
    return (
        <>
            {children}
        </>
    );
}

export default WithChild