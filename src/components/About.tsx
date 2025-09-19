const About = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="bg-gradient-card rounded-xl p-8 md:p-12 shadow-card hover:shadow-hover transition-shadow duration-300">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              As a highly motivated and detail-oriented Computer Science student specializing in 
              <span className="text-primary font-semibold"> AI and Robotics</span>, I bring a unique 
              blend of theoretical knowledge and practical experience to every project.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My proficiency spans across <span className="text-accent font-semibold">software development</span>, 
              <span className="text-accent font-semibold"> machine learning</span>, and 
              <span className="text-accent font-semibold"> cloud computing</span> with hands-on experience 
              in AWS and GCP platforms.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With expertise in <span className="text-primary font-semibold">ReactJS</span>, 
              <span className="text-primary font-semibold"> Node.js</span>, and 
              <span className="text-primary font-semibold"> RESTful APIs</span>, I'm passionate about 
              applying innovative solutions to complex problems and contributing to impactful, scalable projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">95%</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">AI Accuracy</h3>
                <p className="text-sm text-muted-foreground">Automated Grading System</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">70%</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Time Reduction</h3>
                <p className="text-sm text-muted-foreground">Manual Evaluation Process</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">60%</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Engagement Boost</h3>
                <p className="text-sm text-muted-foreground">Virtual Assistant Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;