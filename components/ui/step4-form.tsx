'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Input } from './input'
import { Button } from './button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './form'
import { toast } from './use-toast'
import { updateOrCreateSetting } from '@/prisma/actions/settings'
import { useMemo, useState } from 'react'
import { UpdateIcon } from '@radix-ui/react-icons'
import { Separator } from '@/components/ui/separator'
import { Input2 } from '@/components/ui/input2'
import { cn } from '@/lib/utils'
import { Trash2, CirclePlus } from 'lucide-react';
import {DndContext} from '@dnd-kit/core';
import {SortableContext, useSortable} from '@dnd-kit/sortable';
import {CSS} from "@dnd-kit/utilities"
import { log } from 'console'

const step4FormSchema = z.object({
    priceRange: z.array(z.object({
        value: z.string() 
    })).min(0, { message: 'Price must be greater than or equal to 0.' }),
    socialMedia: z.array(z.object({
        id: z.string(),
        value: z.string() 
    })).min(0, { message: 'Price must be greater than or equal to 0.' }),
    antallAnnonser: z.coerce.string().min(0, { message: 'Price must be greater than or equal to 0.' }),
    visninger: z.coerce.string().min(0, { message: 'Price must be greater than or equal to 0.' }),
    besøkende: z.coerce.string().min(0, { message: 'Price must be greater than or equal to 0.' }),
    konverteringer: z.coerce.string().min(0, { message: 'Price must be greater than or equal to 0.' }),
    
})

type Step4FormValues = z.infer<typeof step4FormSchema>

// This can come from your database or API.
const defaultValues: Partial<Step4FormValues> = {
    priceRange: [   { value: '6 000 - 10 000' }, 
                    { value: '10 000 - 15 000' }, 
                    { value: '15 000 - 20 000' }, 
                    { value: '20 000 - 30 000' }, 
                    { value: '30 000 - 40 000' }, 
                    { value: '40 000 - 50 000' },
                ],
    socialMedia: [  {id:"1", value: 'Google' }, 
                    {id:"2", value: 'Facebook' }, 
                    {id:"3", value: 'Instagram' }, 
                    {id:"4", value: 'LinkedIn' }, 
                    {id:"5", value: 'Snapchat' }, 
                    {id:"6", value: 'TikTok' },
                    {id:"7", value: 'Bing' },
                    {id:"8", value: 'Youtube' },
            ],  
    antallAnnonser: "1 per 3000",
    visninger: "45.000 per 3000",
    besøkende: "400 per 3000",
    konverteringer: "10 per 3000",                  
    
}

export function Step4Form({ defaultData }: { defaultData: any }) {

    const [loading, setLoading] = useState(false)

    const form = useForm<Step4FormValues>({
        resolver: zodResolver(step4FormSchema),
        defaultValues: defaultData || defaultValues,
        mode: 'onChange',
    })

  
    const { fields: priceRangeFields, remove: removePriceRange, append: appendPriceRange } = useFieldArray({
        name: 'priceRange',
        control: form.control,
    })

    const { fields: socialMediaFields, remove: removeSocialMedia, append: appendSocialMedia } = useFieldArray({
        name: 'socialMedia',
        control: form.control,
    })
    
    const dragableMedia = useMemo(() =>socialMediaFields.map((i) => i.id ),[socialMediaFields])


    
    const onDragStart = ()=>{
        console.log('Drag Start')
    }

    function onSubmit(data: Step4FormValues) {
        setLoading(true)
        console.log(data)

        return

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
        <DndContext onDragStart={onDragStart}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/*<h3 className="font-semibold">Base platform cost</h3>*/}

                    <div className="grid grid-cols-1 gap-x-4 gap-y-8">

                    {priceRangeFields.map((field, index) => (
                            <FormField
                                control={form.control}
                                key={field.id}
                                name={`priceRange.${index}.value`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className={cn(index !== 0 && 'sr-only')}>URLs</FormLabel>
                                        <FormDescription className={cn(index !== 0 && 'sr-only')}>
                                            Add links to your website, blog, or social media profiles.
                                        </FormDescription>
                                        <FormControl className={cn('flex items-center')}>
                                            <div className="flex items-center gap-4">
                                                <Input2 className='w-full' {...field} />
                                                <Button onClick={() => removePriceRange(index)}>
                                                    <Trash2 className='w-5' />
                                                </Button>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        ))}
                        <Button
                            type="button"
                            className="mt-2"
                            onClick={() => appendPriceRange({ value: '' })}
                        >
                            {/* <CirclePlus /> */}
                            Add Field
                        </Button>
                        <SortableContext items={dragableMedia}>
                        {socialMediaFields.map((field, index) => {
                            const {attributes, setNodeRef, listeners, transform,  transition} = useSortable({
                                id: field.id,
                                data: {
                                    type:'socialMedia',
                                    field,
                                }
                            })
                            const styles = {
                                transition,
                                transform: CSS.Transform.toString(transform)
                            }

                            console.log(transform)
                           return  (
                                <FormField
                                    control={form.control}
                                    key={field.id}
                                    name={`socialMedia.${index}.value`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className={cn(index !== 0 && 'sr-only')}>URLs</FormLabel>
                                            <FormDescription className={cn(index !== 0 && 'sr-only')}>
                                                Add links to your website, blog, or social media profiles.
                                            </FormDescription>
                                            <FormControl ref={setNodeRef} style={styles} >
                                                <div className="flex items-center gap-4" {...attributes} {...listeners}>
                                                    <Input2 className='w-full' {...field} />
                                                    <Button onClick={() => removeSocialMedia(index)}>
                                                        <Trash2 className='w-5' /> 
                                                    </Button>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )
                        })
                        }

                        <Button
                            type="button"
                            className="mt-2"
                            onClick={() => appendSocialMedia({id: '', value: '' })}
                        >
                            {/* <CirclePlus /> */}
                            Add Field
                        </Button>
                        </SortableContext>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                        <FormField
                            control={form.control}
                            name="antallAnnonser"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Antall annonser:</FormLabel>
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
                            name="visninger"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Visninger:</FormLabel>
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
                            name="besøkende"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Besøkende:</FormLabel>
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
                            name="konverteringer"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Konverteringer:</FormLabel>
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


                    <Button type="submit" disabled={loading}>
                        {loading ? <UpdateIcon className="mr-2 h-4 w-4 animate-spin" /> : ''}
                        {loading ? 'updating' : 'Update settings'}
                    </Button>
                </form>
            </Form>
        </DndContext>
    )
}
