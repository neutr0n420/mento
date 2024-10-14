import { Button } from "../ui/button";
import { Card, CardDescription, CardTitle } from "../ui/card";

export default function OptionCard({ heading, description, btnLabel }: { heading: string, description: string, btnLabel: string }) {
    return (
        <div>
            <Card className="w-1/4 bg-gray-900 text-white px-12 py-8">
                <CardTitle className="pb-4">{heading}</CardTitle>
                <CardDescription className="text-gray-200">{description}</CardDescription>
                <Button className="bg-slate-50 text-gray-900 flex justify-center">Click to become {btnLabel}</Button>
            </Card>
        </div>
    )
}