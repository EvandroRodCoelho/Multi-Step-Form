interface UserInformationProps {
   title:string
   information:string 
}

export function UserInformation ({information,title}: UserInformationProps) {

    return (
    <div className="flex items-center gap-1 p-1 md:text-xl">
        <h3 className="text-zinc-800">
            <strong>{title}</strong>
        </h3>
        <p className="text-zinc-800 truncate">{information}</p>
    </div>
    );
}