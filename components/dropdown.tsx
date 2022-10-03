import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { scrollToSection } from '../lib/functions'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DropDown({ navigation }) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button
                    className="focus:shadow-outline flex transform items-center p-1 text-pink-800 transition duration-300 ease-in-out hover:scale-105 hover:text-gray-900 focus:outline-none">
                    <span
                        className="sr-only">
                        Open options
                    </span>
                    <svg
                        className="h-6 w-6 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {navigation.map((item, idx) =>
                            <Menu.Item key={idx}>
                                {({ active }) => (
                                    <p
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm hover:text-wtDarkCerulian font-semibold cursor-pointer'
                                        )}
                                        onClick={() => scrollToSection(item.id)}
                                    >
                                        {item.name}
                                    </p>
                                )}
                            </Menu.Item>
                        )}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
