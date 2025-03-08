import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef()
    const [form, setform] = useState({
        site: '',
        username: '',
        password: ''
    })
    const [PasswordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem('passwords')
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])
    const copyText = (text,type) => {
        toast.success(`${type} Copied to clipboard `, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
  
            });             
        navigator.clipboard.writeText(text)
    }



    let clicked = true
    const showPassword = () => {
        const password = document.querySelector('[placeholder="Enter Password"]')
        if (password.type === 'password' && clicked) {
            password.type = 'text'
            clicked = false
            ref.current.src = 'icons/eyecross.png'
        } else if (password.type === 'text' && !clicked) {
            password.type = 'password'
            clicked = true
            ref.current.src = 'icons/eye.png'
        }
    }
    const savePassword = () => {
        const website = document.querySelector('[placeholder="Enter Website URL"]').value
        const username = document.querySelector('[placeholder="Enter Username"]').value
        const password = document.querySelector('[placeholder="Enter Password"]').value
        if (!website && !username && !password) { 
            toast.error('Please fill all the fields', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                return;
        }


        setPasswordArray([...PasswordArray, {...form,id:uuidv4()}])
        localStorage.setItem('passwords', JSON.stringify([...PasswordArray, {...form,id:uuidv4()}]))
        setform({
            site: '',
            username: '',
            password: ''
        })
        toast.success('Saved Sucessfully', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
            });

    }
    const deletePassword = (id) => {
        let c = confirm('Are you sure you want to delete')
        if(c){
            toast.warn('Deleting', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
                });
            setPasswordArray(PasswordArray.filter((item) => item.id !== id))
            localStorage.setItem('passwords', JSON.stringify(PasswordArray.filter((item) => item.id !== id)))

        }

    }
    const editPassword = (id) => {
        toast.info('Editing', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
            });
        setform(PasswordArray.filter((item) => item.id === id)[0])
        setPasswordArray(PasswordArray.filter((item) => item.id !== id))
       


    }
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    return (
        
        <>
        <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
               
            /> 

            <div className="relative min-h-screen bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#8383f68f,transparent)]"></div>
                <div className="flex-grow sm:mycontainer sm:px-32 sm:py-10 relative z-10">
                    <h1 className='text-3xl font-bold text-center'>
                        <span className='text-blue-500'>&lt;</span>
                        Pass
                        <span className='text-blue-500'>MAN/&gt;</span>
                    </h1>
                    <p className='text-blue-900 text-lg text-center'>Your Password Manager </p>

                    <div className="flex flex-col p-4 gap-6 items-center">
                        <input type="text" value={form.site} onChange={handleChange} placeholder="Enter Website URL" className='rounded-full border border-blue-500 text-black w-full px-3 py-0.5' name='site' />
                        <div className="flex flex-col sm:flex-row w-full gap-6 justify-between">
                            <input type="text" value={form.username} onChange={handleChange} placeholder="Enter Username" className='rounded-full border border-blue-500 text-black w-full px-3 py-0.5' name='username' />

                            <div className="relative">
                                <input type="password" value={form.password} onChange={handleChange} placeholder="Enter Password" className='rounded-full border border-blue-500 text-black w-full px-3 py-0.5' name='password' />
                                <span className='absolute cursor-pointer right-[2px] top-[2px]' onClick={showPassword}>
                                    <img ref={ref} className='p-1 ' width={25} src="icons\eye.png" alt="" />
                                </span>
                            </div>
                        </div>

                        <button onClick={savePassword} className='flex justify-center gap-2 items-center hover:bg-blue-400 bg-blue-600 rounded-full px-6 py-1.5 w-fit border-2 border-blue-900 '>
                            <lord-icon
                                src="https://cdn.lordicon.com/hqymfzvj.json"
                                trigger="hover"
                                colors="primary:#000000"
                            >
                            </lord-icon>Save</button>
                    </div>
                    <div className="passwords">
                        <h1 className='text-xl text-blue-700 font-bold py-2'>Your Passwords</h1>
                        {PasswordArray.length === 0 && <p className='text-blue-700 text-center text-xl'>No Passwords Saved</p>}
                        {PasswordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden">
                            <thead className='bg-blue-500 text-white'>
                                <tr>
                                    <th className='py-1'>Website</th>
                                    <th className='py-1'>Username</th>
                                    <th className='py-1'>Password</th>
                                    <th className='py-2'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-blue-100'>
                                {PasswordArray.map((item, index) => {
                                    return <tr key={index}>
                                        <td className='py-1  border border-white text-center'>
                                            <div className='flex items-center justify-center '>
                                                <a href={item.site} target='_blank'>{item.site}</a>
                                                <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.site,"Website") }}>
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover" >
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-1 border border-white text-center'>
                                            <div className='flex items-center justify-center '>
                                                <span>{item.username}</span>
                                                <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.username,"Username") }}>
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover" >
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>

                                        <td className='py-1 border border-white text-center'>
                                            <div className='flex items-center justify-center '>
                                                <span>{item.password}</span>
                                                <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password,"Password") }}>
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover" >
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='justify-center py-1 border border-white text-center'>
                                            <span className='cursor-pointer mx-1' onClick={()=>{editPassword(item.id)}}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/gwlusjdu.json"
                                                    trigger="hover"
                                                    style={{"width":"25px", "height":"25px"}}>
                                                </lord-icon>
                                            </span>
                                            <span className='cursor-pointer mx-1'onClick={()=>{deletePassword(item.id)}}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover"
                                                    style={{"width":"25px", "height":"25px"}}>
                                                </lord-icon>
                                            </span>
                                        </td>
                                    </tr>
                                    
                                })}

                            </tbody>
                        </table>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manager