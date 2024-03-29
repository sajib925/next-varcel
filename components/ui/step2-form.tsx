'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Input } from './input'
import { Button } from './button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './form'
import { toast } from './use-toast'
import { updateOrCreateSetting } from '@/prisma/actions/settings'

const step2FormSchema = z.object({
    priceForYes: z.coerce.number().min(0, { message: 'Price must be greater than or equal to 0.' }),
    priceForNo: z.coerce.number().min(0, { message: 'Price must be greater than or equal to 0.' }),
})

type Step1FormValues = z.infer<typeof step2FormSchema>

// This can come from your database or API.
const defaultValues: Partial<Step1FormValues> = {
    priceForYes: 7140,
    priceForNo: 4760,
}

export function Step2Form({ defaultData }: { defaultData: any }) {
    const form = useForm<Step1FormValues>({
        resolver: zodResolver(step2FormSchema),
        defaultValues: defaultData || defaultValues,
        mode: 'onChange',
    })

    function onSubmit(data: Step1FormValues) {
        console.log('Running submit ')
        toast({
            title: 'You submitted the following values:',
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })

        updateOrCreateSetting({ stepTwo: data }, 'step2').then((r) => console.log(r))
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="priceForYes"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Price when user selects `Yes`</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is used in second page of calculator. The title on that selection is `Skal din
                                bedrift annonsere nettbutikk?`
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="priceForNo"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Price when user selects `No`</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is used in second page of calculator. The title on that selection is `Skal din
                                bedrift annonsere nettbutikk?`
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Update settings</Button>
            </form>
        </Form>
    )
}
