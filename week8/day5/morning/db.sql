CREATE DATABASE hospital;

CREATE TABLE doctors(
  doctor_id SERIAL PRIMARY KEY,
  first_name VARCHAR(20),
  last_name VARCHAR(20),
  profession VARCHAR(30)
)

CREATE TABLE patients(
  patient_id SERIAL PRIMARY KEY,
  first_name VARCHAR(20),
  last_name VARCHAR(20),
  condition VARCHAR(50)
)

CREATE TABLE appointments(
  appointment_id SERIAL PRIMARY KEY,
  procedure VARCHAR(50),
  date VARCHAR(8),
  FOREIGN KEY(doctor_id),
  FOREIGN KEY(patient_id),
  REFERENCES doctors(doctor_id),
  REFERENCES patients(patient_id),
  ON DELETE CASCADE
)
