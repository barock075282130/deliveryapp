import UsernameForm from "./UsernameForm";

const Customer = ({ userDataRole }) => {
    return (
        <div>
            {userDataRole&&userDataRole?.username === '' ? (
                <UsernameForm 
                    data={userDataRole}
                />
            ): (
                <p>
                    Customer
                </p>
            )}
        </div>
    )
}

export default Customer