import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Kickstart your fitness journey with our top-rated workout session. Whether you're a beginner or a fitness enthusiast, this session is designed to challenge and motivate you to achieve your goals.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Our featured bootcamps are crafted to push you to the next level. With high-energy workouts and experienced trainers, you're guaranteed to break a sweat and see results.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength & Conditioning Bootcamp</h4>
            <p>
              Build muscle and burn fat in our Strength & Conditioning Bootcamp. Our expert trainers will guide you through a challenging, yet rewarding, experience.
            </p>
          </div>
          <div>
            <h4>HIIT Bootcamp</h4>
            <p>
              Take your fitness to the next level with high-intensity interval training. This bootcamp is perfect for those looking to burn calories and increase endurance.
            </p>
          </div>
          <div>
            <h4>Yoga & Flexibility Bootcamp</h4>
            <p>
              Relax and rejuvenate in our Yoga Bootcamp, focusing on flexibility, balance, and mindfulness. Perfect for improving mobility and mental clarity.
            </p>
          </div>
          <div>
            <h4>Cardio Blast Bootcamp</h4>
            <p>
              Elevate your heart rate and torch calories in our Cardio Blast Bootcamp. Fun, dynamic, and designed to make you feel energized.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
 