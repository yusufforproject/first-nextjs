'use client';

interface ViewUserButtonProps {
    userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
    const handleClick = () => alert(`user id: ${userId}`);

    return (
        <button
            onClick={handleClick}>
            View UserId
        </button>
    );
};

export default ViewUserButton