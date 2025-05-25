import { Card, CardBody, Button,Image } from "@heroui/react";
import React from "react";

export default function profile() {
    return (
        <div>
            <Card>
                <CardBody>
                    <div className='flex flex-row items-center justify-center w-full h-screen gap-7'>
                        <div className="flex flex-col w-1/2 items-center justify-center text-9xl w-full">
                            <h2>
                                Vikrant Singh
                            </h2>
                            <p>
                                I am a Full stack developer.
                            </p>
                        </div>
                        <div className="flex flex-col w-1/2 m-4 items-center justify-center">
                            <div>
                                <Button
                                    color="primary"
                                    variant="solid"
                                    
                                    >

                                    <Image
                                    src="/images/email.png"
                                    alt="email"
                                    width={20}
                                    height={20}
                                    className="rounded-lg shadow-lg cursor-pointer"
                                    />
                                    Email
                                </Button>
                            </div>

                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}