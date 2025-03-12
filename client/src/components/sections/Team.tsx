
import { motion } from "framer-motion";

export default function Team() {
  return (
    <section id="team" className="team-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Board Of Directors
      </motion.h2>
      <div className="team-grid">
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img src="https://via.placeholder.com/120" alt="Hajiya Mama" />
          <h4>Hajiya Mama</h4>
          <p>Director</p>
        </motion.div>
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src="https://via.placeholder.com/120" alt="Ahmad Muhammad Kabir" />
          <h4>Ahmad Muhammad Kabir</h4>
          <p>Director</p>
        </motion.div>
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img src="https://via.placeholder.com/120" alt="Kabir Muhammad Kabir" />
          <h4>Kabir Muhammad Kabir</h4>
          <p>Director</p>
        </motion.div>
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img src="https://via.placeholder.com/120" alt="Muhammad Abdallah Dayyan" />
          <h4>Muhammad Abdallah Dayyan</h4>
          <p>Director, Services Operations</p>
        </motion.div>
      </div>

      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Management Staffs
      </motion.h2>
      <div className="team-grid">
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img src="https://via.placeholder.com/120" alt="Hafsat Kabir" />
          <h4>Hafsat Kabir</h4>
          <p>Head of Dispatch</p>
        </motion.div>
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src="https://via.placeholder.com/120" alt="Hassana Kabir" />
          <h4>Hassana Kabir</h4>
          <p>Finance Officer</p>
        </motion.div>
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img src="https://via.placeholder.com/120" alt="Abubakar Aliyu Gambo" />
          <h4>Abubakar Aliyu Gambo</h4>
          <p>Marketing / IT</p>
        </motion.div>
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img src="/images/Muhammad Abdulkadir.jpg" alt="Muhammad Abdulkadir" />
          <h4>Muhammad Abdulkadir</h4>
          <p>Executive Assistant / HR</p>
        </motion.div>
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <img src="https://via.placeholder.com/120" alt="Ahmad Usman" />
          <h4>Ahmad Usman</h4>
          <p>Accountant / Special Assistant</p>
        </motion.div>
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <img src="https://via.placeholder.com/120" alt="Ilyasu Muhammad" />
          <h4>Ilyasu Muhammad</h4>
          <p>Project Manager / Dispatch Officer</p>
        </motion.div>
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <img src="https://via.placeholder.com/120" alt="Usman Hassan" />
          <h4>Usman Hassan</h4>
          <p>Store Keeper / Procurement</p>
        </motion.div>
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <img src="https://via.placeholder.com/120" alt="Arch. Suleiman Abba" />
          <h4>Arch. Suleiman Abba</h4>
          <p>Designer</p>
        </motion.div>
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <img src="https://via.placeholder.com/120" alt="Muhammad Mu'awiyya" />
          <h4>Muhammad Mu'awiyya</h4>
          <p>Project Manager / Production Manager</p>
        </motion.div>
        <motion.div 
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <img src="https://via.placeholder.com/120" alt="Mrs. Fadila Sambo" />
          <h4>Mrs. Fadila Sambo</h4>
          <p>Kenya Operations</p>
        </motion.div>
      </div>
    </section>
  );
}
