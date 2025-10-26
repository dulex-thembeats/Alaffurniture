import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Team member data structure
type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio?: string;
};

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Example bios - you can replace these with actual information
  const getMemberBio = (name: string) => {
    return `${name} is a valued member of our organization with extensive experience in their field. They have contributed significantly to our company's growth and success through their dedication and expertise.`;
  };

  return (
    <section id="team" className="team-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 text-primary">ALAF Leadership Team</h2>
      </motion.div>
      <div className="team-grid mb-16">
      {/* <motion.div
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onClick={() =>
            setSelectedMember({
              name: "Sarah Johnson",
              role: "Director of Design",
              image: "https://images.unsplash.com/photo-1494790108755-2616b612b566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
              bio: getMemberBio("Sarah Johnson"),
            })
          }
        >
          <img src="https://images.unsplash.com/photo-1494790108755-2616b612b566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80" alt="Sarah Johnson" />
          <h4>Sarah Johnson</h4>
          <p>Director of Design</p>
        </motion.div> */}
        <motion.div
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={() =>
            setSelectedMember({
              name: "Michael Chen",
              role: "Operations Director",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
              bio: getMemberBio("Michael Chen"),
            })
          }
        >
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80" alt="Michael Chen" />
          <h4>Michael Chen</h4>
          <p>Operations Director</p>
        </motion.div>
        <motion.div
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={() =>
            setSelectedMember({
              name: "David Wilson",
              role: "Creative Director",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
              bio: getMemberBio("David Wilson"),
            })
          }
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
            alt="David Wilson"
          />
          <h4>David Wilson</h4>
          <p>Creative Director</p>
        </motion.div>
        <motion.div
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={() =>
            setSelectedMember({
              name: "Emma Rodriguez",
              role: "Strategic Director",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
              bio: getMemberBio("Emma Rodriguez"),
            })
          }
        >
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
            alt="Emma Rodriguez"
          />
          <h4>Emma Rodriguez</h4>
          <p>Strategic Director</p>
        </motion.div>
      </div>

      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 text-primary">ALAF Management Team</h2>
      </motion.div>
      <div className="team-grid">
        <motion.div
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onClick={() =>
            setSelectedMember({
              name: "Lisa Martinez",
              role: "Operations Manager",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
              bio: getMemberBio("Lisa Martinez"),
            })
          }
        >
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face" alt="Lisa Martinez" />
          <h4>Lisa Martinez</h4>
          <p>Operations Manager</p>
        </motion.div>
        <motion.div
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={() =>
            setSelectedMember({
              name: "James Thompson",
              role: "Finance Manager",
              image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
              bio: getMemberBio("James Thompson"),
            })
          }
        >
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face" alt="James Thompson" />
          <h4>James Thompson</h4>
          <p>Finance Manager</p>
        </motion.div>
        <motion.div
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={() =>
            setSelectedMember({
              name: "Rachel Adams",
              role: "Project Manager",
              image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=150&h=150&fit=crop&crop=face",
              bio: getMemberBio("Rachel Adams"),
            })
          }
        >
          <img
            src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=150&h=150&fit=crop&crop=face"
            alt="Rachel Adams"
          />
          <h4>Rachel Adams</h4>
          <p>Project Manager</p>
        </motion.div>
        <motion.div
          className="team-member"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={() =>
            setSelectedMember({
              name: "Alex Kumar",
              role: "Marketing & IT Manager",
              image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
              bio: getMemberBio("Alex Kumar"),
            })
          }
        >
          <img
            src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face"
            alt="Alex Kumar"
          />
          <h4>Alex Kumar</h4>
          <p>Marketing & IT Manager</p>
        </motion.div>
      </div> */}

      {/* Profile Modal */}
      <Dialog
        open={!!selectedMember}
        onOpenChange={() => setSelectedMember(null)}
      >
        {selectedMember && (
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">
                {selectedMember.name}
              </DialogTitle>
              <DialogDescription className="text-lg font-medium">
                {selectedMember.role}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 flex flex-col items-center">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-32 h-32 rounded-full border-4 border-primary shadow-lg mb-4"
              />
              <p className="text-muted-foreground text-center">
                {selectedMember.bio}
              </p>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
