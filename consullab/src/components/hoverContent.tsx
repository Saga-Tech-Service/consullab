"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Variantes para a animação do dropdown
    const dropdownVariants = {
        open: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
        closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    };

    return (
        <nav className="w-full max-w-[90rem] mx-auto py-4">
            <ul className="flex space-x-8 justify-center">
                <li
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    className="relative"
                >
                    <button type='button' className="text-lg font-medium">Serviços</button>

                    {/* Dropdown */}
                    <motion.div
                        className="absolute left-0 w-[90rem] bg-white shadow-lg"
                        initial="closed"
                        animate={isOpen ? 'open' : 'closed'}
                        variants={dropdownVariants}
                    >
                        <ul className="bg-red-500 p-4 grid grid-cols-3 gap-4">
                            <li className="text-gray-700 hover:text-blue-500">
                                Consultoria Jurídica
                            </li>
                            <li className="text-gray-700 hover:text-blue-500">
                                Planejamento Estratégico
                            </li>
                            <li className="text-gray-700 hover:text-blue-500">
                                Gestão de Riscos
                            </li>
                        </ul>
                    </motion.div>
                </li>

                <li>
                    <button
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                        type='button' className="text-lg font-medium relative" >Sobre Nós</button>

                    {/* Dropdown */}
                    <motion.div
                        className="absolute left-0 w-[90rem] bg-white shadow-lg"
                        initial="closed"
                        animate={isOpen ? 'open' : 'closed'}
                        variants={dropdownVariants}
                    >
                        <ul className="bg-red-500 p-4 grid grid-cols-3 gap-4">
                            <li className="text-gray-700 hover:text-blue-500">
                                Consultoria Jurídica
                            </li>
                            <li className="text-gray-700 hover:text-blue-500">
                                Planejamento Estratégico
                            </li>
                            <li className="text-gray-700 hover:text-blue-500">
                                Gestão de Riscos
                            </li>
                        </ul>
                    </motion.div>
                </li>

                <li>
                    <button
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                        type='button' className="text-lg font-medium relative">Contato</button>

                    {/* Dropdown */}
                    <motion.div
                        className="absolute left-0 w-[90rem] bg-white shadow-lg"
                        initial="closed"
                        animate={isOpen ? 'open' : 'closed'}
                        variants={dropdownVariants}
                    >
                        <ul className="bg-red-500 p-4 grid grid-cols-3 gap-4">
                            <li className="text-gray-700 hover:text-blue-500">
                                Consultoria Jurídica
                            </li>
                            <li className="text-gray-700 hover:text-blue-500">
                                Planejamento Estratégico
                            </li>
                            <li className="text-gray-700 hover:text-blue-500">
                                Gestão de Riscos
                            </li>
                        </ul>
                    </motion.div>
                </li>
            </ul>
        </nav>
    );
};

export { Menu };
