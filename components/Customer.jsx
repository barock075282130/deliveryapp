import PackageStatus from "./PackageStatus";
import UsernameForm from "./UsernameForm";

const Customer = ({ userDataRole }) => {
    return (
        <div>
            {userDataRole&&userDataRole?.username === ''&&(
                <UsernameForm 
                    userId={userDataRole?._id}
                />
            )}
            {userDataRole&&userDataRole?.username !== ''&&(
                <PackageStatus 
                    userId={userDataRole?._id}
                />
            )}
        </div>
    )
}

export default Customer