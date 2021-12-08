import { useState, useEffect } from "react"

//(useState baese dobare render shodan component mishavad
// va moghdar jadid ra ba meghdar ghabli avaz mikonad
// state darvaghe motaghaer haee ast ke ma dar proje darim);

//agar bekhahim meghdar ghabli ra dar ye object negah darim bayad az seprate estefade
//konim EX: const [person, setPerson] = useState({name:"", age:""})
//agar bekhahim meghdar harkodam ra taghir dahim bedune tasir roye digari bayad az
//...person estefade konim, darvaghe ...person property haye object person ra
// dakhele object jadidi ke tashkil dadeim mirizad.

// in nemune dar mored array ham mibashad va mitavanim az in tarigh be meghadir dakhel
// yek array dastrasi dakhte bashim 
// const [user, setUser] = useState([]);
// const [newUser, setNewUser] = useState("");

// const handleChange = (e) => {
//     setNewUser(e.target.value)
// }

// const handleClick = () => {
//     setUser([...user , newUser])
// }

// user.map((users)=>(<li>{users}</li>))....



const Practice = () => {
    // const [person, setPerson] = useState({ name: "", age: "" })

    // const [user, setUser] = useState(["Aida", "Saeid", "Hamed", "Vahid"])
    // const [newUser, setNewUser] = useState("")

    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
                setError("");

            })
            .catch(err => {
                console.log(err.message);
                setError(err.message);
                setLoading(false)
            })
    })


    // const handleChange = (e) => {
    //     setNewUser(e.target.value)
    // }
    // const handleClick = (e)=>{
    //     setUser([...user, newUser]) 
    // }


    // const handleChange = (e) =>{
    //     let options = [...e.target.selectedOptions].map((item)=>item.value)
    //     console.log(options);
    // }
    // let checkItem = []
    // const handleChange = (e) => {
    //     let item = checkItem.find((item) => item === e.target.value)

    //     if (item) {
    //         checkItem = checkItem.filter(item => item !== e.target.value)
    //     }
    //     else {
    //         checkItem.push(e.target.value)
    //     }

    //     console.log(checkItem);
    // }
    // const handleChangeN = (e) => {
    //     setPerson({...person,name:e.target.value})
    // }
    // const handleChangeA = (e) => {
    //     setPerson({...person,age:e.target.value})
    // }


    return (
        <>
            {error && <h1>{error}</h1>}
            <h1>{loading && "Loading..."}</h1>
            {posts == null ? "" : posts.map(post => (
                <>
                    <h1>{post.title}</h1>
                    {/* <img src={post.url} style={{"width":"80px"}} alt="" /> */}
                </>
            ))}
            {/* <input onChange={handleChange} />
            <button onClick={handleClick}>add</button>
            <ul>{user.map((u) => <li>{u}</li>)}</ul> */}
            {/* <input onChange={handleChangeN} />
            <input onChange={handleChangeA} />
            <h2>Name:{person.name}</h2>
            <h2>Age:{person.age}</h2> */}
            {/* <input type="text" onChange={(e) => { handleChange(e.target.value) }} />
            <textarea onChange={(e) => { handleChange(e.target.value) }}></textarea>
            <select multiple onChange={handleChange} >
                <option>Car Brand</option>
                <option value="BMW" >BMW</option>
                <option value="Honda" >Honda</option>
                <option value="Kia">Kia</option>
            </select>
            <input type="checkBox" value="Bike" onChange={handleChange} />
            <input type="checkBox" value="car" onChange={handleChange} />
            <input type="checkBox" value="boat" onChange={handleChange} />
        <input onChange={handleChange}  type="radio" name="gender" value="male" />
        <input onChange={handleChange} type="radio" name= "gender" value="female" /> */}
        </>
    );
}

export default Practice;
