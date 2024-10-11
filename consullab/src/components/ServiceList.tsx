"use client"
import { motion } from 'framer-motion'
import { useRouter, usePathname, Link } from '@/i18n/routing'
import { Separator } from '@/components/Separator'
import { cn } from '@/lib/utils'

interface Service {
    id: string
    title: string
    number: string
    href: string
}

interface ServiceListProps {
    title: string
    className?: string
    services: Service[]
    variant?: 'light' | 'dark' | 'default'
}

const ServiceList: React.FC<ServiceListProps> = ({ className, title, services, variant = 'default' }) => {
    const asPath = usePathname()

    // Definir variantes de animação para container e itens
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    }

    // Função para obter cores com base no "variant"
    const getColors = () => {
        switch (variant) {
            case 'dark':
                return {
                    bg: 'bg-transparent',
                    text: 'text-white',
                    border: 'border-gray-700',
                    hover: 'group-hover:text-yellow-400',
                }
            default: // Aqui o 'default' também engloba o caso 'light'
                return {
                    bg: 'bg-transparent',
                    text: 'text-[#091622]',
                    border: 'border-[#e0dfe6]',
                    hover: 'group-hover:text-[#cb935d]',
                }
        }
    }


    // Aplicar as cores baseadas no variant
    const colors = getColors()

    // Filtrar os serviços que têm href diferente da rota atual
    const filteredServices = services.filter((service) => service.href !== asPath)

    return (
        <motion.div
            className={cn(`w-full  ${colors.bg}`, className)}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Título da seção */}
                <motion.div variants={itemVariants} className="flex flex-col gap-6">
                    <Separator className={`w-full border-${colors.border}`} />
                    <h2 className={`${colors.text} text-sm sm:text-base font-semibold uppercase`}>
                        {title}
                    </h2>
                </motion.div>

                {/* Listagem dos serviços */}
                <motion.div variants={itemVariants} className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {filteredServices.map((service, index) => (
                        <motion.div key={service.id} variants={itemVariants} className="flex flex-col gap-4">
                            {/* <div className={`w-full h-px ${index % 2 === 0 ? colors.border : 'border-[#091622]'}`} /> */}
                            {/* <Separator /> */}
                            <Separator className='border-[#e0dfe6] w-full' />
                            <Link href={service.href} className="group">
                                <div className="flex justify-between items-start">
                                    <h3 className={`${colors.text} text-base sm:text-xl font-medium pr-4 ${colors.hover} transition-colors duration-300`}>
                                        {service.title}
                                    </h3>
                                    <span className={`${colors.text} text-base sm:text-xl font-medium ${colors.hover} transition-colors duration-300`}>
                                        {service.number.padStart(2, '0')}
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ServiceList
