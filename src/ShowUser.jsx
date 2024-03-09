import './ShowUser.css'
export default function ShowUser({info}){
    const {id,name,email} = info
    return (
        <div className="design">
        <h4>Id: {id}</h4>
        <h4>Name:{name}</h4>
        <h4>Email: {email}</h4>
        </div>

    )
}