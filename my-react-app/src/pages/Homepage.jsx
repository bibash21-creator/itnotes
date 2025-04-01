import React from 'react'
import Navbar from '../universal/Navbar'
import Herosec from '../components/Herosec'
import Semester from '../components/Semester'
import Reason from '../components/Reason'
import Notice from '../components/Notice'
import Contribute from '../components/Contribute'
import Footer from '../universal/Footer'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Homepage() {
  const { ref: semesterRef, inView: semesterInView } = useInView({ triggerOnce: true });
  const { ref: reasonRef, inView: reasonInView } = useInView({ triggerOnce: true });
  const { ref: noticeRef, inView: noticeInView } = useInView({ triggerOnce: true });
  const { ref: contributeRef, inView: contributeInView } = useInView({ triggerOnce: true });

  return (
    <div>
      <Navbar />
      <Herosec />
      <motion.div
        ref={semesterRef}
        initial={{ opacity: 0, y: 50 }}
        animate={semesterInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Semester />
      </motion.div>
      <motion.div
        ref={reasonRef}
        initial={{ opacity: 0, y: 50 }}
        animate={reasonInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Reason />
      </motion.div>
      <motion.div
        ref={noticeRef}
        initial={{ opacity: 0, y: 50 }}
        animate={noticeInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Notice />
      </motion.div>
      <motion.div
        ref={contributeRef}
        initial={{ opacity: 0, y: 50 }}
        animate={contributeInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Contribute />
      </motion.div>
      <Footer />
    </div>
  );
}
