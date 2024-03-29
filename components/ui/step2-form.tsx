'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from './button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './form'
import { toast } from './use-toast'
import { updateOrCreateSetting } from '@/prisma/actions/settings'
import { useState } from 'react'
import { UpdateIcon } from '@radix-ui/react-icons'
import { Input2 } from '@/components/ui/input2'

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
    const [loading, setLoading] = useState(false)

    const form = useForm<Step1FormValues>({
        resolver: zodResolver(step2FormSchema),
        defaultValues: defaultData || defaultValues,
        mode: 'onChange',
    })

    function onSubmit(data: Step1FormValues) {
        setLoading(true)

        updateOrCreateSetting({ stepTwo: data }, 'step2').then(({ success }) => {
            setLoading(false)
            console.log('success: ', success)

            toast({
                title: success ? 'Settings updated' : 'Error updating settings',
                description: success
                    ? 'Settings have been updated successfully.'
                    : 'There was an error updating the settings.',
            })
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                    <FormField
                        control={form.control}
                        name="priceForYes"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Price when user selects `Yes`</FormLabel>
                                <FormControl>
                                    <Input2 placeholder="shadcn" {...field} />
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
                                    <Input2 placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is used in second page of calculator. The title on that selection is `Skal din
                                    bedrift annonsere nettbutikk?`
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button type="submit" disabled={loading}>
                    {loading ? <UpdateIcon className="mr-2 h-4 w-4 animate-spin" /> : ''}
                    {loading ? 'updating' : 'Update settings'}
                </Button>
            </form>
        </Form>
    )
}
