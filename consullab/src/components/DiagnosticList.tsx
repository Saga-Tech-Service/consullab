"use client"
import { Separator } from '@/components/Separator'
import { motion } from 'framer-motion'

interface Diagnostic {
    id: string
    number: string
    title: string
    description: string[]
}

interface DiagnosticListProps {
    diagnostics: Diagnostic[]
    className?: string
    titleColor?: string
    numberColor?: string
    descriptionColor?: string
    borderColor?: string
}

const DiagnosticList: React.FC<DiagnosticListProps> = ({
    diagnostics,
    className = '',
    titleColor = 'text-[#091622]',
    numberColor = 'text-[#091622]',
    descriptionColor = 'text-[#274a6d]',
    borderColor = 'border-[#e0dfe6]'
}) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <motion.div
            className={`w-full flex flex-col space-y-72 ${className}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {diagnostics.map((diagnostic) => (
                <motion.div key={diagnostic.id} className="w-full relative" variants={itemVariants}>
                    <Separator className={`w-full h-px ${borderColor}`} />
                    <div className="mt-10 lg:flex  ">
                        <div className={`${numberColor} flex-1 max-w-[375px] text-3xl lg:text-4xl font-bold font-montserrat leading-[1.4] mb-4 lg:mb-0`}>
                            {diagnostic.number.padStart(2, '0')}
                        </div>
                        <div className="flex-1">
                            <h2 className={`${titleColor} text-2xl lg:text-3xl font-bold font-montserrat leading-[1.4] mb-4`}>
                                {diagnostic.title}
                            </h2>
                            <ul className={`${descriptionColor} text-base lg:text-lg font-medium font-inter leading-[1.5] list-disc pl-5`}>
                                {diagnostic.description.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default DiagnosticList