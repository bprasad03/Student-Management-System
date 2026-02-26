package com.sms.backend.service;

import org.springframework.stereotype.Service;
import java.util.List;
import com.sms.backend.model.Student;
import com.sms.backend.repository.StudentRepository;

@Service
public class StudentService {

    private final StudentRepository repository;

    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    public Student addStudent(Student student) {
        return repository.save(student);
    }

    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    public void deleteStudent(Long id) {
        repository.deleteById(id);
    }
}