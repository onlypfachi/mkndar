import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import {
    BriefcaseIcon,
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    CurrencyDollarIcon,
    LinkIcon,
    MapPinIcon,
    PencilIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'


const items = [
    { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote', offer: '$120k &ndash; $140k', closingDate: 'Closing on January 9, 2020' },
    { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote', offer: '$120k &ndash; $140k', closingDate: 'Closing on January 9, 2020' },
    { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote', offer: '$120k &ndash; $140k', closingDate: 'Closing on January 9, 2020' },
]

export default function RecentJobs() {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 flex-row">
            <di className="bg-black h-1080px">            
                {items.map((item) => {
                return (
                    <div className="lg:flex lg:items-center lg:justify-between flex-row bg-green-100 ml-10px" >
                        <div className="min-w-0 flex-1">
                            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                {item.title}
                            </h2>
                            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                                <div className="mt-2 flex items-center text-sm text-gray-500">
                                    <BriefcaseIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    {item.type}
                                </div>
                                <div className="mt-2 flex items-center text-sm text-gray-500">
                                    <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    {item.location}
                                </div>
                                <div className="mt-2 flex items-center text-sm text-gray-500">
                                    <CurrencyDollarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    {item.offer}
                                </div>
                                <div className="mt-2 flex items-center text-sm text-gray-500">
                                    <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    {item.closingDate}
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 flex lg:ml-4 lg:mt-0 hover:bg-sky-700">

                            <span className="ml-3 hidden sm:block hover:bg-sky-700">
                                <a href='https://www.tadiwapfachi.dev' className="hover:text-white hover:bg-purple-600 hover:border-gray-300">
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:text-white hover:bg-purple-600 hover:border-gray-300"
                                    >
                                        <LinkIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        View more
                                    </button>
                                </a>
                            </span>

                        </div>
                    </div>
                )
            })}
            </di>


        </div>
    )
}
