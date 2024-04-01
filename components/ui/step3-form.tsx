'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Input } from './input'
import { Button } from './button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './form'
import { toast } from './use-toast'
import { updateOrCreateSetting } from '@/prisma/actions/settings'
import { useState } from 'react'
import { UpdateIcon } from '@radix-ui/react-icons'
import { Separator } from '@/components/ui/separator'
import { Input2 } from '@/components/ui/input2'

const step3FormSchema = z.object({
    google: z.coerce.number().min(0, { message: 'Price must be greater than or equal to 0.' }),
    facebook: z.coerce.number().min(0, { message: 'Price must be greater than or equal to 0.' }),
    instagram: z.coerce.number().min(0, { message: 'Price must be greater than or equal to 0.' }),
    linkedIn: z.coerce.number().min(0, { message: 'Price must be greater than or equal to 0.' }),
    snapchat: z.coerce.number().min(0, { message: 'Price must be greater than or equal to 0.' }),
    tikTok: z.coerce.number().min(0, { message: 'Price must be greater than or equal to 0.' }),
    youtube: z.coerce.number().min(0, { message: 'Price must be greater than or equal to 0.' }),
    bing: z.coerce.number().min(0, { message: 'Price must be greater than or equal to 0.' }),
    googleAndBing: z.coerce.number().min(0, { message: 'Price must be greater than or equal to 0.' }),
    facebookAndInstagram: z.coerce.number().min(0, { message: 'Price must be greater than or equal to 0.' }),
    baseTotalDivideBy: z.coerce.number().min(0, { message: 'Price must be greater than or equal to 0.' }),
    costPerPlatform: z.coerce.number().min(0, { message: 'Price must be greater than or equal to 0.' }),
})

type Step3FormValues = z.infer<typeof step3FormSchema>

// This can come from your database or API.
const defaultValues: Partial<Step3FormValues> = {
    google: 4760,
    facebook: 2975,
    instagram: 2975,
    linkedIn: 2975,
    snapchat: 2975,
    tikTok: 2975,
    youtube: 2975,
    bing: 4760,
    googleAndBing: 4760,
    facebookAndInstagram: 2975,
    baseTotalDivideBy: 6,
    costPerPlatform: 3000,
}

export function Step3Form({ defaultData }: { defaultData: any }) {
    console.log(defaultData)
    const [loading, setLoading] = useState(false)

    const form = useForm<Step3FormValues>({
        resolver: zodResolver(step3FormSchema),
        defaultValues: defaultData || defaultValues,
        mode: 'onChange',
    })

    function onSubmit(data: Step3FormValues) {
        setLoading(true)

        updateOrCreateSetting({ stepThree: data }, 'step3').then(({ success }) => {
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
                {/*<h3 className="font-semibold">Base platform cost</h3>*/}
                <div className="grid grid-cols-4 gap-x-4 gap-y-8">
                    <FormField
                        control={form.control}
                        name="google"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Google</FormLabel>
                                <FormControl>
                                    <Input2 placeholder="0" {...field} />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="facebook"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Facebook</FormLabel>
                                <FormControl>
                                    <Input2 placeholder="0" {...field} />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="instagram"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Instagram</FormLabel>
                                <FormControl>
                                    <Input2 placeholder="0" {...field} />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="linkedIn"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>LinkedIn</FormLabel>
                                <FormControl>
                                    <Input2 placeholder="0" {...field} />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="snapchat"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Snapchat</FormLabel>
                                <FormControl>
                                    <Input2 placeholder="0" {...field} />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="tikTok"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>TikTok</FormLabel>
                                <FormControl>
                                    <Input2 placeholder="0" {...field} />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="youtube"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Youtube</FormLabel>
                                <FormControl>
                                    <Input2 placeholder="0" {...field} />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="bing"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Bing</FormLabel>
                                <FormControl>
                                    <Input2 placeholder="0" {...field} />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Separator />

                {/*<h3 className={'font-semibold'}>Conditional pricing</h3>*/}

                <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                    <FormField
                        control={form.control}
                        name="facebookAndInstagram"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Facebook + Instagram</FormLabel>
                                <FormControl>
                                    <Input2 placeholder="0" {...field} />
                                </FormControl>
                                <FormDescription>
                                    If custom selects both Facebook and Instagram, this price will be added to the
                                    total.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="googleAndBing"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Google + Bing</FormLabel>
                                <FormControl>
                                    <Input2 placeholder="0" {...field} />
                                </FormControl>
                                <FormDescription>
                                    If custom selects both Google and Bing, this price will be added to the total.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="baseTotalDivideBy"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Base total divide by</FormLabel>
                                <FormControl>
                                    <Input2 placeholder="0" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is used to divide the total cost of all platforms by this number.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="costPerPlatform"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Cost per platform</FormLabel>
                                <FormControl>
                                    <Input2 placeholder="0" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is used to calculate the total cost of all platforms.
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
