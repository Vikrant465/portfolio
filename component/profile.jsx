import { Card, CardBody } from "@heroui/react";
import { div } from "framer-motion/client";

export default function profile() {
    return (
        <div>
            <Card>
                <CardBody>
                    <div className='flex flex-col items-center justify-center w-1/2 h-screen gap-7'>
                        <h2>Vikrant Singh</h2>
                        <p>
                           I am a Full stack developer. 
                        </p>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}