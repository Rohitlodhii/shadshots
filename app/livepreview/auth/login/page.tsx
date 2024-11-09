"use client"

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

//Zod Imports : Install Zod with : npm i zod
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'


//Shad Cn Card Imports :
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

//Icons From React-Icons : install by : npm i react-icons
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { Loader2 } from 'lucide-react'




//Zod Schema for the Form component, Optional : (You can put it in your Schema's folder and import from there) 

const LoginFormSchema = z.object({
    email: z.string().email("Not a valid email"),
    password: z.string().min(6, "Password should be minimum 6 characters")
})

const LoginPage = () => {


    const [checked, setChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    //Submit Form Function : 
    function onSubmit(values: z.infer<typeof LoginFormSchema>) {

        setIsLoading(true)
        setTimeout(() => setIsLoading(false), 2000)
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }




    // //Defining the Form through zod schema

    const loginform = useForm<z.infer<typeof LoginFormSchema>>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            email: "",
            password: ""
        },

    })




    return (
        <section className='h-screen w-full flex items-center justify-center bg-neutral-800'>
            <div className=' bg-white w-full md:w-[80%]  md:mx-16 h-full md:h-[90%] lg:rounded-2xl shadow-md flex overflow-hidden'>
                <div className='flex items-center justify-center h-full  flex-1 bg-neutral-800 lg:bg-slate-100  '>

                    {/* Login Page Form by Shadcn , you can copy code inside it and can serve it as component too */}

                    <Card className='w-[330px]'>
                        <CardHeader>
                            <CardTitle className='font-semibold'>Login</CardTitle>
                            <CardDescription>Login to your Shadshots account</CardDescription>
                        </CardHeader>
                        <CardContent>

                            <Form {...loginform}>

                                <form onSubmit={loginform.handleSubmit(onSubmit)}  >

                                    <FormField

                                        control={loginform.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem className='my-1'>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="example@email.com" {...field} />
                                                </FormControl>

                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={loginform.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem className='my-1'>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input type={checked ? "text" : "password"} placeholder="Type your password" {...field} />
                                                </FormControl>

                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <div className='flex my-4 w-full justify-between'>

                                        <div className='flex gap-1 items-center'>
                                            <Checkbox id='showpass' checked={checked} onCheckedChange={(state) => setChecked(state === true)} />
                                            <Label htmlFor='showpass' className='text-zinc-700 text-sm' >Show Password</Label>
                                        </div>

                                        <div className='text-sm text-zinc-400 cursor-pointer hover:underline' >Forgot password?</div>


                                    </div>

                                    {/* Button loading states */}

                                    {isLoading ? <Button className='w-full' disabled>
                                        <Loader2 className="animate-spin " />
                                        Please wait
                                    </Button>

                                        :
                                        <Button className='w-full' type="submit">Log In</Button>
                                    }


                                </form>

                            </Form>


                            <div className='text-sm text-zinc-600 mt-6 text-center w-full'>
                                Don't have an account? <span className='text-black cursor-pointer hover:underline'>Signup</span>
                            </div>

                        </CardContent>
                        <CardFooter className='flex flex-col'>

                            {/* Oauth Section */}

                            <Separator className='mb-4' />



                            <div className='w-full flex gap-2'>
                                <Button variant={"outline"} className='w-full'><FcGoogle /></Button>
                                <Button variant={"outline"} className='w-full'><FaGithub /></Button>
                            </div>

                        </CardFooter>
                    </Card>


                    {/* Login Page Component Ends Here */}


                </div>

                {/* Cover Image Here , only visible on the Large Screens , Change the cover image path on the object above */}

                <div
                    className="hidden md:hidden lg:flex items-center justify-center h-full flex-1 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://img.freepik.com/free-vector/flat-design-frailejon-plant-illustration_23-2150041935.jpg?t=st=1731138651~exp=1731142251~hmac=af72164671c4777fc0a506020f26e907be40b15ba230d21e1eee5a254966ca05&w=740')" }}
                >

                </div>
            </div>
        </section>
    )
}

export default LoginPage