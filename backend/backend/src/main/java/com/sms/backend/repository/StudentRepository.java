package com.sms.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sms.backend.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
}