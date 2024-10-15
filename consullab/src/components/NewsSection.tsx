"use client"
import { motion } from 'framer-motion'

interface NewsItem {
    id: string
    date: string
    title: string
}

interface NewsSectionProps {
    title: string
    news: NewsItem[]
}

const NewsSection: React.FC<NewsSectionProps> = ({ title, news }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={itemVariants} className="mb-8">
                <div className="w-full h-px border-t border-[#e0dfe6]" />
                <h2 className="mt-8 text-[#091622] text-base font-medium font-inter leading-normal">
                    {title}
                </h2>
            </motion.div>
            <motion.div variants={containerVariants} className="space-y-8">
                {news.map((item) => (
                    <motion.div key={item.id} variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                        <div className="w-full sm:w-52 h-px sm:h-auto border-t sm:border-t-0 border-[#e0dfe6]" />
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                            <p className="text-[#274a6d] text-lg font-bold font-montserrat leading-[25.20px]">
                                {item.date}
                            </p>
                            <p className="text-[#091622] text-base font-normal font-inter leading-normal sm:w-[592px]">
                                {item.title}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default NewsSection