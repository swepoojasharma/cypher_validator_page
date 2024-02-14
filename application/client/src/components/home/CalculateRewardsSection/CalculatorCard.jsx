import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import TextField from '../../ui/TextField';
import { cx } from 'class-variance-authority';
import SelectDropdownArrow from '../../../assets/svg-components/SelectDropdownArrow';

function CalculatorCard(props) {
    const { title, leftImage, controlType, controlName, controlValue, controlOnChange, options, selected, setSelected, disabled } = props;

    return (
        <div className="p-8 border border-solid border-black-100 shadow-feature-card flex flex-col justify-between items-start gap-4 bg-purple-500">
            <div className="text-black-100 text-label-20px-semibold">{title}</div>
            {controlType === 'textbox' && (
                <TextField
                    name={controlName}
                    required
                    value={controlValue}
                    onChange={controlOnChange}
                    className="border border-solid border-black-600 shadow-text-field rounded-[4px] !py-0 !pr-0.5 !pl-0 !px-6 h-10 text-black-500 bg-white-100 w-full"
                    disabled={disabled}
                    leftImage={leftImage}
                    inputClassName="pl-3"
                />
            )}
            {controlType === 'selectbox' && (
                <Listbox value={selected} onChange={setSelected}>
                    {({ open }) => (
                        <div className="relative mt-1 w-full">
                            <Listbox.Button className="relative w-full cursor-default bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm bg-white-100 h-10 border border-solid border-black-600 rounded-[4px]">
                                <span className="block truncate">{selected.label}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <SelectDropdownArrow className={cx(open && 'rotate-180', 'transition-all ease-in-out')} />
                                </span>
                            </Listbox.Button>
                            <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm bg-white-100">
                                    {options.map((option, optionIdx) => (
                                        <Listbox.Option
                                            key={optionIdx}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={option}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                        {option.label}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                            {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    )}
                </Listbox>
            )}
        </div>
    );
}
export default CalculatorCard;
