"use client";
import Button from '@/src/components/ui/Button';
import Input from '@/src/components/ui/Input';
import ContactModal from '@/src/components/ui/Modal/ContactModal';
import Link from 'next/link';
import React, { useState } from 'react';
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/src/components/ui/Map/Map"), { ssr: false });

const initialFormData = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
};

const Contact = () => {
    const [openModal, setOpenModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState(initialFormData);

    async function handleSubmitForm(e: React.FormEvent) {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        setOpenModal(true);
        setFormData(initialFormData);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <div className='px-[130px] pt-[13px]'>
                <div className="flex items-center gap-[15px] mb-[22px]">
                    <Link className='text-[14px] leading-[19px] text-[#B6BABF]' href={'/'}>Bosh sahifa /</Link>
                    <Link className='text-[14px] leading-[19px] text-[#B6BABF]' href={'/contact'}>Qayta aloqa /</Link>
                </div>
                <div className="w-[771px]">
                    <h1 className='text-[32px] leading-[44px] font-bold text-[#0A1729] mb-[16px]'>Qayta aloqa</h1>
                    <p className='text-[16px] leading-[20px] text-[#545D6A] mb-[35px]'>
                        Bizning ishimiz haqidagi fikir mulohazalaringiz bilan bo’lishing yoki izohlar maydonida o’zingizni qiziqtirgan savolingizni yo’llang
                    </p>
                    <form onSubmit={handleSubmitForm} className='w-[690px] flex items-center flex-wrap justify-between'>
                        <label className='flex flex-col mb-[31px]'>
                            <strong className='text-[12px] leading-[15px] mb-[4px] text-[#848B93]'>Ism</strong>
                            <Input name='firstName' value={formData.firstName} onChange={handleChange} placeholder='' type='text' extraClass='w-[330px]' />
                        </label>
                        <label className='flex flex-col mb-[31px]'>
                            <strong className='text-[12px] leading-[15px] mb-[4px] text-[#848B93]'>Familya</strong>
                            <Input name='lastName' value={formData.lastName} onChange={handleChange} placeholder='' type='text' extraClass='w-[330px]' />
                        </label>
                        <label className='flex flex-col'>
                            <strong className='text-[12px] leading-[15px] mb-[4px] text-[#848B93]'>Telefon raqam</strong>
                            <Input name='phone' value={formData.phone} onChange={handleChange} placeholder='' type='tel' extraClass='w-[330px]' />
                        </label>
                        <label className='flex flex-col'>
                            <strong className='text-[12px] leading-[15px] mb-[4px] text-[#848B93]'>Email</strong>
                            <Input name='email' value={formData.email} onChange={handleChange} placeholder='' type='email' extraClass='w-[330px]' />
                        </label>
                        <label className='flex flex-col mt-[30px]'>
                            <strong className='text-[12px] leading-[15px] mb-[4px] text-[#848B93]'>O’zingizni fikrlangizni qoldiring</strong>
                            <textarea name='message' value={formData.message} onChange={handleChange} className='!w-[690px] h-[130px] focus:shadow focus:shadow-[#134E9B] duration-300 bg-[#EBEFF3] outline-none py-[17px] px-[26px] rounded-[6px] text-[14px] leading-[#EBEFF3]'></textarea>
                        </label>
                        <Button title={isSubmitting ? "Yuborilmoqda..." : "Xabar yuborish"} type="submit" extrClass="w-full mt-[30px]" isLoading={isSubmitting} />
                    </form>
                </div>
                <ContactModal isOpen={openModal} onClose={() => setOpenModal(false)}>
                    <div className="bg-white p-6 rounded-lg max-w-sm w-full">
                        <h2 className="text-2xl font-bold mb-4">Rahmat!</h2>
                        <p>Sizning xabaringiz muvaffaqiyatli yuborildi. Tez orada siz bilan bog'lanamiz.</p>
                    </div>
                </ContactModal>
            </div>
            <MapComponent />
        </>
    );
};

export default Contact;
