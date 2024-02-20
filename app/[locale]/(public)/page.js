'use client'
import React, { useEffect, useState } from 'react';
import About_work from '@/components/About_work';
import Advantage from '@/components/Advantage';
import Cars from '@/components/Cars';
import Hero from '@/components/Hero';
import Informations from '@/components/Information';
import Locations from '@/components/Locations';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/TranslationsProvider';

const i18nNamespaces = ['home', 'common'];

const Home = ({ params: { locale } }) => {
    const [translations, setTranslations] = useState(null);

    useEffect(() => {
        const fetchTranslations = async () => {
            const { t, resources } = await initTranslations(locale, i18nNamespaces);
            setTranslations({ t, resources });
        };

        fetchTranslations();
    }, [locale]);

    if (!translations) {
        return <div>Loading...</div>;
    }

    const { t, resources } = translations;

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
        >
            <main>
               
                <Hero />
                <Locations />
                <About_work />
                <Cars />
                <Informations />
                {/* <Advantage /> */}
            </main>
        </TranslationsProvider>
    );
};

export default Home;
