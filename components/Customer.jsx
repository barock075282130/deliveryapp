import PackageStatus from "./PackageStatus";
import UsernameForm from "./UsernameForm";

const Customer = ({ userDataRole }) => {
    return (
        <div>
            {userDataRole&&userDataRole?.username === ''&&(
                <div className="w-screen">
                    <UsernameForm 
                        userId={userDataRole?._id}
                    />
                </div>
            )}
            {userDataRole&&userDataRole?.username !== ''&&(
                <div className="w-screen">
                    <PackageStatus 
                        userId={userDataRole?._id}
                    />
                </div>
            )}
        </div>
    )
}

export default Customer