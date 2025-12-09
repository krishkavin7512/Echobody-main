# Full Project Context
Generated on 12/09/2025 21:31:01


================================================================================
FILE PATH: backend\build_log.txt
================================================================================

[INFO] Scanning for projects...
[INFO] 
[INFO] -----------------------< com.echobody:echobody >------------------------
[INFO] Building echobody 0.0.1-SNAPSHOT
[INFO]   from pom.xml
[INFO] --------------------------------[ jar ]---------------------------------
[INFO] 
[INFO] --- resources:3.3.1:resources (default-resources) @ echobody ---
[INFO] Copying 1 resource from src\main\resources to target\classes
[INFO] Copying 0 resource from src\main\resources to target\classes
[INFO] 
[INFO] --- compiler:3.14.1:compile (default-compile) @ echobody ---
[INFO] Recompiling the module because of changed source code.
[INFO] Compiling 35 source files with javac [debug parameters release 17] to target\classes
[INFO] /K:/EchoBody Main/Echobody-main/backend/src/main/java/com/echobody/config/SecurityConfig.java: K:\EchoBody Main\Echobody-main\backend\src\main\java\com\echobody\config\SecurityConfig.java uses or overrides a deprecated API.
[INFO] /K:/EchoBody Main/Echobody-main/backend/src/main/java/com/echobody/config/SecurityConfig.java: Recompile with -Xlint:deprecation for details.
[INFO] Some messages have been simplified; recompile with -Xdiags:verbose to get full output
[INFO] -------------------------------------------------------------
[ERROR] COMPILATION ERROR : 
[INFO] -------------------------------------------------------------
[ERROR] /K:/EchoBody Main/Echobody-main/backend/src/main/java/com/echobody/controller/DashboardController.java:[36,98] incompatible types: java.time.LocalDate cannot be converted to java.time.chrono.ChronoLocalDateTime<?>
[ERROR] /K:/EchoBody Main/Echobody-main/backend/src/main/java/com/echobody/service/WorkoutService.java:[18,33] cannot find symbol
  symbol:   method findByUserIdOrderByDateDesc(java.lang.String)
  location: variable workoutRepository of type com.echobody.repository.WorkoutRepository
[ERROR] /K:/EchoBody Main/Echobody-main/backend/src/main/java/com/echobody/service/MealService.java:[18,30] cannot find symbol
  symbol:   method findByUserIdOrderByDateTimeDesc(java.lang.String)
  location: variable mealRepository of type com.echobody.repository.MealRepository
[ERROR] /K:/EchoBody Main/Echobody-main/backend/src/main/java/com/echobody/controller/ProgressController.java:[108,25] incompatible types: inference variable T has incompatible bounds
    equality constraints: java.time.LocalDate
    lower bounds: java.time.LocalDateTime
[INFO] 4 errors 
[INFO] -------------------------------------------------------------
[INFO] ------------------------------------------------------------------------
[INFO] BUILD FAILURE
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  3.139 s
[INFO] Finished at: 2025-12-09T20:50:25+05:30
[INFO] ------------------------------------------------------------------------
[ERROR] Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.14.1:compile (default-compile) on project echobody: Compilation failure: Compilation failure: 
[ERROR] /K:/EchoBody Main/Echobody-main/backend/src/main/java/com/echobody/controller/DashboardController.java:[36,98] incompatible types: java.time.LocalDate cannot be converted to java.time.chrono.ChronoLocalDateTime<?>
[ERROR] /K:/EchoBody Main/Echobody-main/backend/src/main/java/com/echobody/service/WorkoutService.java:[18,33] cannot find symbol
[ERROR]   symbol:   method findByUserIdOrderByDateDesc(java.lang.String)
[ERROR]   location: variable workoutRepository of type com.echobody.repository.WorkoutRepository
[ERROR] /K:/EchoBody Main/Echobody-main/backend/src/main/java/com/echobody/service/MealService.java:[18,30] cannot find symbol
[ERROR]   symbol:   method findByUserIdOrderByDateTimeDesc(java.lang.String)
[ERROR]   location: variable mealRepository of type com.echobody.repository.MealRepository
[ERROR] /K:/EchoBody Main/Echobody-main/backend/src/main/java/com/echobody/controller/ProgressController.java:[108,25] incompatible types: inference variable T has incompatible bounds
[ERROR]     equality constraints: java.time.LocalDate
[ERROR]     lower bounds: java.time.LocalDateTime
[ERROR] -> [Help 1]
[ERROR] 
[ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.
[ERROR] Re-run Maven using the -X switch to enable full debug logging.
[ERROR] 
[ERROR] For more information about the errors and possible solutions, please read the following articles:
[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoFailureException


================================================================================
FILE PATH: backend\build_log_clean.txt
================================================================================

[INFO] Scanning for projects...
[INFO] 
[INFO] -----------------------< com.echobody:echobody >------------------------
[INFO] Building echobody 0.0.1-SNAPSHOT
[INFO]   from pom.xml
[INFO] --------------------------------[ jar ]---------------------------------
[INFO] 
[INFO] --- clean:3.4.1:clean (default-clean) @ echobody ---
[INFO] Deleting K:\EchoBody Main\Echobody-main\backend\target
[INFO] 
[INFO] --- resources:3.3.1:resources (default-resources) @ echobody ---
[INFO] Copying 1 resource from src\main\resources to target\classes
[INFO] Copying 0 resource from src\main\resources to target\classes
[INFO] 
[INFO] --- compiler:3.14.1:compile (default-compile) @ echobody ---
[INFO] Recompiling the module because of changed source code.
[INFO] Compiling 35 source files with javac [debug parameters release 17] to target\classes
[INFO] /K:/EchoBody Main/Echobody-main/backend/src/main/java/com/echobody/config/SecurityConfig.java: K:\EchoBody Main\Echobody-main\backend\src\main\java\com\echobody\config\SecurityConfig.java uses or overrides a deprecated API.
[INFO] /K:/EchoBody Main/Echobody-main/backend/src/main/java/com/echobody/config/SecurityConfig.java: Recompile with -Xlint:deprecation for details.
[INFO] Some messages have been simplified; recompile with -Xdiags:verbose to get full output
[INFO] -------------------------------------------------------------
[ERROR] COMPILATION ERROR : 
[INFO] -------------------------------------------------------------
[ERROR] /K:/EchoBody Main/Echobody-main/backend/src/main/java/com/echobody/controller/DashboardController.java:[36,98] incompatible types: java.time.LocalDate cannot be converted to java.time.chrono.ChronoLocalDateTime<?>
[ERROR] /K:/EchoBody Main/Echobody-main/backend/src/main/java/com/echobody/controller/ProgressController.java:[108,25] incompatible types: inference variable T has incompatible bounds
    equality constraints: java.time.LocalDate
    lower bounds: java.time.LocalDateTime
[INFO] 2 errors 
[INFO] -------------------------------------------------------------
[INFO] ------------------------------------------------------------------------
[INFO] BUILD FAILURE
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  3.519 s
[INFO] Finished at: 2025-12-09T20:53:43+05:30
[INFO] ------------------------------------------------------------------------
[ERROR] Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.14.1:compile (default-compile) on project echobody: Compilation failure: Compilation failure: 
[ERROR] /K:/EchoBody Main/Echobody-main/backend/src/main/java/com/echobody/controller/DashboardController.java:[36,98] incompatible types: java.time.LocalDate cannot be converted to java.time.chrono.ChronoLocalDateTime<?>
[ERROR] /K:/EchoBody Main/Echobody-main/backend/src/main/java/com/echobody/controller/ProgressController.java:[108,25] incompatible types: inference variable T has incompatible bounds
[ERROR]     equality constraints: java.time.LocalDate
[ERROR]     lower bounds: java.time.LocalDateTime
[ERROR] -> [Help 1]
[ERROR] 
[ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.
[ERROR] Re-run Maven using the -X switch to enable full debug logging.
[ERROR] 
[ERROR] For more information about the errors and possible solutions, please read the following articles:
[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoFailureException


================================================================================
FILE PATH: backend\build_log_full.txt
================================================================================

[INFO] Scanning for projects...
[INFO] 
[INFO] -----------------------< com.echobody:echobody >------------------------
[INFO] Building echobody 0.0.1-SNAPSHOT
[INFO]   from pom.xml
[INFO] --------------------------------[ jar ]---------------------------------
[INFO] 
[INFO] --- clean:3.4.1:clean (default-clean) @ echobody ---
[INFO] Deleting K:\EchoBody Main\Echobody-main\backend\target
[INFO] 
[INFO] --- resources:3.3.1:resources (default-resources) @ echobody ---
[INFO] Copying 1 resource from src\main\resources to target\classes
[INFO] Copying 0 resource from src\main\resources to target\classes
[INFO] 
[INFO] --- compiler:3.14.1:compile (default-compile) @ echobody ---
[INFO] Recompiling the module because of changed source code.
[INFO] Compiling 35 source files with javac [debug parameters release 17] to target\classes
[INFO] /K:/EchoBody Main/Echobody-main/backend/src/main/java/com/echobody/config/SecurityConfig.java: K:\EchoBody Main\Echobody-main\backend\src\main\java\com\echobody\config\SecurityConfig.java uses or overrides a deprecated API.
[INFO] /K:/EchoBody Main/Echobody-main/backend/src/main/java/com/echobody/config/SecurityConfig.java: Recompile with -Xlint:deprecation for details.
[INFO] Some messages have been simplified; recompile with -Xdiags:verbose to get full output
[INFO] -------------------------------------------------------------
[ERROR] COMPILATION ERROR : 
[INFO] -------------------------------------------------------------
[ERROR] /K:/EchoBody Main/Echobody-main/backend/src/main/java/com/echobody/controller/DashboardController.java:[36,98] incompatible types: java.time.LocalDate cannot be converted to java.time.chrono.ChronoLocalDateTime<?>
[INFO] 1 error
[INFO] -------------------------------------------------------------
[INFO] ------------------------------------------------------------------------
[INFO] BUILD FAILURE
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  3.970 s
[INFO] Finished at: 2025-12-09T20:55:32+05:30
[INFO] ------------------------------------------------------------------------
[ERROR] Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.14.1:compile (default-compile) on project echobody: Compilation failure
[ERROR] /K:/EchoBody Main/Echobody-main/backend/src/main/java/com/echobody/controller/DashboardController.java:[36,98] incompatible types: java.time.LocalDate cannot be converted to java.time.chrono.ChronoLocalDateTime<?>
[ERROR] 
[ERROR] -> [Help 1]
[ERROR] 
[ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.
[ERROR] Re-run Maven using the -X switch to enable full debug logging.
[ERROR] 
[ERROR] For more information about the errors and possible solutions, please read the following articles:
[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoFailureException


================================================================================
FILE PATH: backend\pom.xml
================================================================================

<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>3.5.7</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.echobody</groupId>
	<artifactId>echobody</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>echobody</name>
	<description>EchoBody - Personalized Fitness and Wellness Tracker</description>
	<url/>
	<licenses>
		<license/>
	</licenses>
	<developers>
		<developer/>
	</developers>
	<scm>
		<connection/>
		<developerConnection/>
		<tag/>
		<url/>
	</scm>
	<properties>
		<java.version>17</java.version>
	</properties>
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-mongodb</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-security</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-validation</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
			<scope>runtime</scope>
			<optional>true</optional>
		</dependency>
		<dependency>
			<groupId>org.projectlombok</groupId>
			<artifactId>lombok</artifactId>
			<optional>true</optional>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.security</groupId>
			<artifactId>spring-security-test</artifactId>
			<scope>test</scope>
		</dependency>
		<dependency>
			<groupId>io.jsonwebtoken</groupId>
			<artifactId>jjwt-api</artifactId>
			<version>0.11.5</version>
		</dependency>
		<dependency>
			<groupId>io.jsonwebtoken</groupId>
			<artifactId>jjwt-impl</artifactId>
			<version>0.11.5</version>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>io.jsonwebtoken</groupId>
			<artifactId>jjwt-jackson</artifactId>
			<version>0.11.5</version>
			<scope>runtime</scope>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-compiler-plugin</artifactId>
				<configuration>
					<annotationProcessorPaths>
						<path>
							<groupId>org.projectlombok</groupId>
							<artifactId>lombok</artifactId>
						</path>
					</annotationProcessorPaths>
				</configuration>
			</plugin>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
				<configuration>
					<excludes>
						<exclude>
							<groupId>org.projectlombok</groupId>
							<artifactId>lombok</artifactId>
						</exclude>
					</excludes>
				</configuration>
			</plugin>
		</plugins>
	</build>

</project>


================================================================================
FILE PATH: backend\src\main\java\com\echobody\config\SecurityConfig.java
================================================================================

package com.echobody.config;

import com.echobody.security.JwtAuthenticationFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import org.springframework.security.config.Customizer;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import java.util.Arrays;

import org.springframework.web.filter.CorsFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final AuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final UserDetailsService customUserDetailsService;

    public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter,
            AuthenticationEntryPoint jwtAuthenticationEntryPoint, UserDetailsService customUserDetailsService) {
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
        this.jwtAuthenticationEntryPoint = jwtAuthenticationEntryPoint;
        this.customUserDetailsService = customUserDetailsService;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(customUserDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
            throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .exceptionHandling(exception -> exception.authenticationEntryPoint(jwtAuthenticationEntryPoint))
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/api/auth/**").permitAll()
                        .anyRequest().authenticated())
                .authenticationProvider(authenticationProvider())
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOriginPatterns(Arrays.asList("http://localhost:*"));
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        config.setAllowedHeaders(Arrays.asList("*"));
        config.setAllowCredentials(true);
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\controller\AuthController.java
================================================================================

package com.echobody.controller;

import com.echobody.dto.AuthResponse;
import com.echobody.dto.LoginRequest;
import com.echobody.dto.RegisterRequest;
import com.echobody.model.User;
import com.echobody.repository.UserRepository;
import com.echobody.security.JwtTokenProvider;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.echobody.dto.UserDto;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider tokenProvider;

    public AuthController(AuthenticationManager authenticationManager, UserRepository userRepository,
            PasswordEncoder passwordEncoder, JwtTokenProvider tokenProvider) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.tokenProvider = tokenProvider;
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.getEmail(),
                            loginRequest.getPassword()));

            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = tokenProvider.generateToken(authentication);

            User user = userRepository.findByEmail(loginRequest.getEmail())
                    .orElseThrow(() -> new UsernameNotFoundException("User not found"));

            return ResponseEntity.ok(new AuthResponse(jwt, user.getId(), user.getName(), user.getEmail()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Collections.singletonMap("message", "Invalid email or password"));
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest) {
        if (userRepository.findByEmail(registerRequest.getEmail()).isPresent()) {
            return ResponseEntity.badRequest()
                    .body(Collections.singletonMap("message", "Email is already taken!"));
        }

        try {
            User user = new User();
            user.setName(registerRequest.getName());
            user.setEmail(registerRequest.getEmail());
            user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
            user.setAge(registerRequest.getAge());
            user.setHeight_cm(registerRequest.getHeight_cm());
            user.setWeight_kg(registerRequest.getWeight_kg());
            user.setGoal(registerRequest.getGoal());
            user.setGender(registerRequest.getGender());

            userRepository.save(user);

            return ResponseEntity.ok(Collections.singletonMap("message", "User registered successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Collections.singletonMap("message", "Registration failed: " + e.getMessage()));
        }
    }

    @GetMapping("/me")
    public ResponseEntity<?> me(Authentication authentication) {
        if (authentication == null || authentication.getName() == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        String email = authentication.getName();
        User user = userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("Not found"));
        UserDto dto = new UserDto();
        dto.setId(user.getId());
        dto.setName(user.getName());
        dto.setEmail(user.getEmail());
        dto.setAge(user.getAge());
        dto.setHeight_cm((int) user.getHeight_cm());
        dto.setWeight_kg((int) user.getWeight_kg());
        dto.setGoal(user.getGoal());
        dto.setGender(user.getGender());
        return ResponseEntity.ok(dto);
    }
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\controller\DashboardController.java
================================================================================

package com.echobody.controller;

import com.echobody.dto.DashboardSummary;
import com.echobody.model.Meal;
import com.echobody.model.Workout;
import com.echobody.service.MealService;
import com.echobody.service.WorkoutService;
import com.echobody.security.JwtTokenProvider;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @Autowired
    private WorkoutService workoutService;

    @Autowired
    private MealService mealService;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @GetMapping("/summary")
    public DashboardSummary getSummary(@RequestHeader("Authorization") String token) {
        String userId = getUserIdFromToken(token);
        DashboardSummary summary = new DashboardSummary();

        // Workouts this week (simple logic)
        List<Workout> workouts = workoutService.getUserWorkouts(userId);
        long count = workouts.stream()
                .filter(w -> w.getDate() != null && w.getDate().toLocalDate().isAfter(LocalDate.now().minusDays(7)))
                .count();
        summary.setWorkoutsThisWeek(count);

        // Calories today
        List<Meal> meals = mealService.getUserMeals(userId);
        int calories = meals.stream()
                .filter(m -> m.getDateTime() != null && m.getDateTime().toLocalDate().isEqual(LocalDate.now()))
                .mapToInt(Meal::getCalories)
                .sum();
        summary.setCaloriesToday(calories);

        // Mock/Simulated for now until dedicated tracking exists
        summary.setStreakDays(5);
        summary.setEnergyLevel("High");

        return summary;
    }

    private String getUserIdFromToken(String token) {
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
        return jwtTokenProvider.getUserIdFromJWT(token);
    }
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\controller\MealController.java
================================================================================

package com.echobody.controller;

import com.echobody.model.Meal;
import com.echobody.service.MealService;
import com.echobody.security.JwtTokenProvider;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@RestController
@RequestMapping("/api/meals")
public class MealController {

    @Autowired
    private MealService mealService;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @GetMapping
    public List<Meal> getMeals(@RequestHeader("Authorization") String token) {
        String userId = getUserIdFromToken(token);
        return mealService.getUserMeals(userId);
    }

    @PostMapping
    public Meal createMeal(@RequestHeader("Authorization") String token, @RequestBody Meal meal) {
        String userId = getUserIdFromToken(token);
        return mealService.logMeal(meal, userId);
    }

    @PutMapping("/{id}")
    public Meal updateMeal(@RequestHeader("Authorization") String token, @PathVariable String id,
            @RequestBody Meal meal) {
        String userId = getUserIdFromToken(token);
        return mealService.updateMeal(id, meal, userId);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteMeal(@PathVariable String id) {
        mealService.deleteMeal(id);
        return ResponseEntity.ok().build();
    }

    private String getUserIdFromToken(String token) {
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
        return jwtTokenProvider.getUserIdFromJWT(token);
    }
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\controller\MoodController.java
================================================================================

package com.echobody.controller;

import com.echobody.model.MoodEntry;
import com.echobody.service.MoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mood")
public class MoodController {
    @Autowired
    private MoodService moodService;

    @GetMapping
    public List<MoodEntry> getMoodEntries(Authentication authentication) {
        return moodService.getMoodEntries(authentication.getName());
    }

    @PostMapping
    public MoodEntry addMoodEntry(@RequestBody MoodEntry entry, Authentication authentication) {
        return moodService.addMoodEntry(entry, authentication.getName());
    }

    @DeleteMapping("/{id}")
    public void deleteMoodEntry(@PathVariable String id) {
        moodService.deleteMoodEntry(id);
    }
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\controller\ProgressController.java
================================================================================

package com.echobody.controller;

import com.echobody.dto.PersonalRecordDTO;
import com.echobody.dto.ProgressSummaryDTO;
import com.echobody.dto.TrendPointDTO;
import com.echobody.model.Workout;
import com.echobody.service.WorkoutService;
import com.echobody.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/progress")
public class ProgressController {

    @Autowired
    private WorkoutService workoutService;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @GetMapping("/summary")
    public ProgressSummaryDTO getSummary(@RequestHeader("Authorization") String token) {
        String userId = getUserIdFromToken(token);
        List<Workout> workouts = workoutService.getUserWorkouts(userId);

        ProgressSummaryDTO summary = new ProgressSummaryDTO();
        summary.setTotalWorkouts(workouts.size());

        int totalCalories = workouts.stream().mapToInt(Workout::getCaloriesBurned).sum();
        summary.setTotalCaloriesBurned(totalCalories);

        summary.setLongestStreak(calculateStreak(workouts));

        // Mock score logic: base 60 + (workouts/10) capped at 100
        int score = Math.min(100, 60 + (workouts.size() / 2));
        summary.setAvgEchoScore(score);

        return summary;
    }

    @GetMapping("/trend")
    public List<TrendPointDTO> getTrend(@RequestHeader("Authorization") String token) {
        String userId = getUserIdFromToken(token);
        List<Workout> workouts = workoutService.getUserWorkouts(userId);

        // Group by date and sum calories or count
        Map<String, Integer> dailyScore = new HashMap<>();

        for (Workout w : workouts) {
            if (w.getDate() == null)
                continue;
            String date = w.getDate().toLocalDate().toString();
            // Simple score: 10 points per workout + calories/10
            int points = 10 + (w.getCaloriesBurned() / 50);
            dailyScore.merge(date, points, Integer::sum);
        }

        return dailyScore.entrySet().stream()
                .sorted(Map.Entry.comparingByKey())
                .map(e -> new TrendPointDTO(e.getKey(), Math.min(100, e.getValue())))
                .collect(Collectors.toList());
    }

    @GetMapping("/records")
    public List<PersonalRecordDTO> getRecords(@RequestHeader("Authorization") String token) {
        String userId = getUserIdFromToken(token);
        List<Workout> workouts = workoutService.getUserWorkouts(userId);

        // Group by workout name, find max weight
        Map<String, Workout> maxLiftMap = new HashMap<>();

        for (Workout w : workouts) {
            // Normalize name
            if (w.getName() == null || w.getName().isEmpty())
                continue;
            String name = w.getName().trim();

            if (!maxLiftMap.containsKey(name) || w.getWeight() > maxLiftMap.get(name).getWeight()) {
                maxLiftMap.put(name, w);
            }
        }

        return maxLiftMap.values().stream()
                .map(w -> new PersonalRecordDTO(
                        w.getId(),
                        w.getName(),
                        w.getDate() != null ? w.getDate().toString() : "",
                        w.getWeight(),
                        "kg" // Assuming kg
                ))
                .collect(Collectors.toList());
    }

    private int calculateStreak(List<Workout> workouts) {
        if (workouts.isEmpty())
            return 0;

        List<LocalDate> dates = workouts.stream()
                .map(Workout::getDate)
                .filter(Objects::nonNull)
                .map(java.time.LocalDateTime::toLocalDate)
                .distinct()
                .sorted(Comparator.reverseOrder())
                .collect(Collectors.toList());

        if (dates.isEmpty())
            return 0;

        int currentStreak = 0;
        int maxStreak = 0;

        // Simple streak calculation (consecutive days)
        // This calculates longest streak ever
        List<LocalDate> sortedDates = dates.stream().sorted().collect(Collectors.toList());
        int tempStreak = 1;

        for (int i = 0; i < sortedDates.size() - 1; i++) {
            LocalDate d1 = sortedDates.get(i);
            LocalDate d2 = sortedDates.get(i + 1);

            if (d1.plusDays(1).equals(d2)) {
                tempStreak++;
            } else {
                maxStreak = Math.max(maxStreak, tempStreak);
                tempStreak = 1;
            }
        }
        maxStreak = Math.max(maxStreak, tempStreak);

        return maxStreak;
    }

    private String getUserIdFromToken(String token) {
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
        return jwtTokenProvider.getUserIdFromJWT(token);
    }
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\controller\UserController.java
================================================================================

package com.echobody.controller;

import com.echobody.model.User;
import com.echobody.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/profile")
    public User getProfile(Authentication authentication) {
        return userService.getUserByEmail(authentication.getName());
    }

    @PutMapping("/profile")
    public User updateProfile(@RequestBody User user, Authentication authentication) {
        // authentication.getName() returns email because of CustomUserDetailsService
        // loadUserByUsername
        return userService.updateUserProfile(authentication.getName(), user);
    }
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\controller\WorkoutController.java
================================================================================

package com.echobody.controller;

import com.echobody.model.Workout;
import com.echobody.service.WorkoutService;
import com.echobody.security.JwtTokenProvider;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@RestController
@RequestMapping("/api/workouts")
public class WorkoutController {

    @Autowired
    private WorkoutService workoutService;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @GetMapping
    public List<Workout> getWorkouts(@RequestHeader("Authorization") String token) {
        String userId = getUserIdFromToken(token);
        return workoutService.getUserWorkouts(userId);
    }

    @PostMapping
    public Workout createWorkout(@RequestHeader("Authorization") String token, @RequestBody Workout workout) {
        String userId = getUserIdFromToken(token);
        return workoutService.logWorkout(workout, userId);
    }

    @PutMapping("/{id}")
    public Workout updateWorkout(@RequestHeader("Authorization") String token, @PathVariable String id,
            @RequestBody Workout workout) {
        String userId = getUserIdFromToken(token);
        return workoutService.updateWorkout(id, workout, userId);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteWorkout(@PathVariable String id) {
        workoutService.deleteWorkout(id);
        return ResponseEntity.ok().build();
    }

    private String getUserIdFromToken(String token) {
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
        return jwtTokenProvider.getUserIdFromJWT(token); // Assuming subject is username/email, might need to look up
                                                         // User ID if they differ
    }
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\dto\AuthResponse.java
================================================================================

package com.echobody.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponse {
    private String token;
    private String userId;
    private String name;
    private String email;
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\dto\DashboardSummary.java
================================================================================

package com.echobody.dto;

import lombok.Data;

@Data
public class DashboardSummary {
    private long workoutsThisWeek;
    private int caloriesToday;
    private int streakDays;
    private String energyLevel;
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\dto\LoginRequest.java
================================================================================

package com.echobody.dto;

import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\dto\PersonalRecordDTO.java
================================================================================

package com.echobody.dto;

import lombok.Data;
import lombok.AllArgsConstructor;

@Data
@AllArgsConstructor
public class PersonalRecordDTO {
    private String id;
    private String name;
    private String date;
    private double value;
    private String unit;
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\dto\ProgressSummary.java
================================================================================

package com.echobody.dto;

import java.util.List;

public class ProgressSummary {
    private long totalWorkouts;
    private long totalCalories;
    private int longestStreak;
    private int avgEchoScore;

    // Getters and Setter
    public long getTotalWorkouts() {
        return totalWorkouts;
    }

    public void setTotalWorkouts(long totalWorkouts) {
        this.totalWorkouts = totalWorkouts;
    }

    public long getTotalCalories() {
        return totalCalories;
    }

    public void setTotalCalories(long totalCalories) {
        this.totalCalories = totalCalories;
    }

    public int getLongestStreak() {
        return longestStreak;
    }

    public void setLongestStreak(int longestStreak) {
        this.longestStreak = longestStreak;
    }

    public int getAvgEchoScore() {
        return avgEchoScore;
    }

    public void setAvgEchoScore(int avgEchoScore) {
        this.avgEchoScore = avgEchoScore;
    }
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\dto\ProgressSummaryDTO.java
================================================================================

package com.echobody.dto;

import lombok.Data;

@Data
public class ProgressSummaryDTO {
    private long totalWorkouts;
    private int totalCaloriesBurned;
    private int longestStreak;
    private int avgEchoScore;
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\dto\RegisterRequest.java
================================================================================

package com.echobody.dto;

import lombok.Data;

@Data
public class RegisterRequest {
    private String name;
    private String email;
    private String password;
    private int age;
    private double height_cm;
    private double weight_kg;
    private String goal;
    private String gender;
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\dto\TrendPointDTO.java
================================================================================

package com.echobody.dto;

import lombok.Data;
import lombok.AllArgsConstructor;

@Data
@AllArgsConstructor
public class TrendPointDTO {
    private String date;
    private int score; // or calories/value
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\dto\UserDto.java
================================================================================

package com.echobody.dto;

import lombok.Data;

@Data
public class UserDto {
  private String id;
  private String name;
  private String email;
  private Integer age;
  private Integer height_cm;
  private Integer weight_kg;
  private String goal;
  private String gender;
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\EchobodyApplication.java
================================================================================

package com.echobody;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EchobodyApplication {

	public static void main(String[] args) {
		SpringApplication.run(EchobodyApplication.class, args);
	}

}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\model\Meal.java
================================================================================

package com.echobody.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document(collection = "meals")
public class Meal {
    @Id
    private String id;
    private String userId;
    private String title;
    private String shortDesc;
    private int calories;
    private int protein;
    private int carbs;
    private int fat;
    private String type; // breakfast, lunch, dinner, snack
    private String notes;
    private LocalDateTime dateTime;
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\model\MoodEntry.java
================================================================================

package com.echobody.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Document(collection = "mood_entries")
public class MoodEntry {
    @Id
    private String id;
    private String userId;
    private String mood; // Great, Good, Okay, Low, Bad
    private int energy; // 1-10
    private String notes;
    private LocalDateTime date;

    public MoodEntry() {
    }

    public MoodEntry(String userId, String mood, int energy, String notes, LocalDateTime date) {
        this.userId = userId;
        this.mood = mood;
        this.energy = energy;
        this.notes = notes;
        this.date = date;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getMood() {
        return mood;
    }

    public void setMood(String mood) {
        this.mood = mood;
    }

    public int getEnergy() {
        return energy;
    }

    public void setEnergy(int energy) {
        this.energy = energy;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\model\User.java
================================================================================

package com.echobody.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "users")
public class User {
    @Id
    private String id;
    private String email;
    private String password;
    private String name;
    private int age;
    private double height_cm;
    private double weight_kg;
    private String goal;
    private String gender;
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\model\Workout.java
================================================================================

package com.echobody.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document(collection = "workouts")
public class Workout {
    @Id
    private String id;
    private String userId;
    private String name;
    private String muscleGroup;
    private int sets;
    private int reps;
    private double weight;
    private int caloriesBurned;
    private String notes;
    private LocalDateTime date;
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\repository\MealRepository.java
================================================================================

package com.echobody.repository;

import com.echobody.model.Meal;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface MealRepository extends MongoRepository<Meal, String> {
    List<Meal> findByUserId(String userId);

    List<Meal> findByUserIdOrderByDateTimeDesc(String userId);
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\repository\MoodRepository.java
================================================================================

package com.echobody.repository;

import com.echobody.model.MoodEntry;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface MoodRepository extends MongoRepository<MoodEntry, String> {
    List<MoodEntry> findByUserIdOrderByDateDesc(String userId);
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\repository\UserRepository.java
================================================================================

package com.echobody.repository;

import com.echobody.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByEmail(String email);
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\repository\WorkoutRepository.java
================================================================================

package com.echobody.repository;

import com.echobody.model.Workout;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface WorkoutRepository extends MongoRepository<Workout, String> {
    List<Workout> findByUserId(String userId);

    List<Workout> findByUserIdOrderByDateDesc(String userId);
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\security\JwtAuthenticationEntryPoint.java
================================================================================

package com.echobody.security;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response,
            AuthenticationException authException) throws IOException, ServletException {
        response.setContentType("application/json");
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.getWriter().write("{\"message\": \"Unauthorized: " + authException.getMessage() + "\"}");
    }
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\security\JwtAuthenticationFilter.java
================================================================================

package com.echobody.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtTokenProvider tokenProvider;
    private final UserDetailsService customUserDetailsService;

    public JwtAuthenticationFilter(JwtTokenProvider tokenProvider, UserDetailsService customUserDetailsService) {
        this.tokenProvider = tokenProvider;
        this.customUserDetailsService = customUserDetailsService;
    }

   @Override
protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
    String path = request.getRequestURI();
    // Skip only login and register
    return path.equals("/api/auth/login") || path.equals("/api/auth/register");
}


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        try {
            String jwt = getJwtFromRequest(request);

            if (StringUtils.hasText(jwt) && tokenProvider.validateToken(jwt)) {
                String userId = tokenProvider.getUserIdFromJWT(jwt);

                UserDetails userDetails = customUserDetailsService.loadUserByUsername(userId);
                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        } catch (Exception ex) {
            logger.error("Could not set user authentication in security context", ex);
        }

        filterChain.doFilter(request, response);
    }

    private String getJwtFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7, bearerToken.length());
        }
        return null;
    }
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\security\JwtTokenProvider.java
================================================================================

package com.echobody.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;

@Component
public class JwtTokenProvider {

    // ✅ Fixed, secure 512-bit key (won't regenerate on restart)
    @org.springframework.beans.factory.annotation.Value("${app.jwt.secret}")
    private String jwtSecretString;

    private SecretKey jwtSecret;

    @jakarta.annotation.PostConstruct
    public void init() {
        this.jwtSecret = Keys.hmacShaKeyFor(jwtSecretString.getBytes());
    }

    // Token expiry: 24 hours
    private final long jwtExpirationInMs = 86400000L;

    // 🔹 Generate JWT token after successful authentication
    public String generateToken(Authentication authentication) {
        User userPrincipal = (User) authentication.getPrincipal();

        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + jwtExpirationInMs);

        return Jwts.builder()
                .setSubject(userPrincipal.getUsername())
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(jwtSecret, SignatureAlgorithm.HS512)
                .compact();
    }

    // 🔹 Extract username/email from the JWT token
    public String getUserIdFromJWT(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(jwtSecret)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    // 🔹 Validate the token
    public boolean validateToken(String authToken) {
        try {
            Jwts.parserBuilder()
                    .setSigningKey(jwtSecret)
                    .build()
                    .parseClaimsJws(authToken);
            return true;
        } catch (SecurityException | MalformedJwtException ex) {
            System.out.println("Invalid JWT signature or malformed token");
        } catch (ExpiredJwtException ex) {
            System.out.println("Expired JWT token");
        } catch (UnsupportedJwtException ex) {
            System.out.println("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            System.out.println("JWT claims string is empty");
        }
        return false;
    }
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\service\CustomUserDetailsService.java
================================================================================

package com.echobody.service;

import com.echobody.model.User;
import com.echobody.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), new ArrayList<>());
    }
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\service\MealService.java
================================================================================

package com.echobody.service;

import com.echobody.model.Meal;
import com.echobody.repository.MealRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class MealService {

    @Autowired
    private MealRepository mealRepository;

    public List<Meal> getUserMeals(String userId) {
        return mealRepository.findByUserIdOrderByDateTimeDesc(userId);
    }

    public Meal logMeal(Meal meal, String userId) {
        meal.setUserId(userId);
        if (meal.getDateTime() == null) {
            meal.setDateTime(LocalDateTime.now());
        }
        return mealRepository.save(meal);
    }

    public Meal updateMeal(String id, Meal meal, String userId) {
        return mealRepository.findById(id)
                .map(existingMeal -> {
                    if (existingMeal.getUserId().equals(userId)) {
                        existingMeal.setTitle(meal.getTitle());
                        existingMeal.setCalories(meal.getCalories());
                        existingMeal.setProtein(meal.getProtein());
                        existingMeal.setCarbs(meal.getCarbs());
                        existingMeal.setFat(meal.getFat());
                        existingMeal.setType(meal.getType());
                        existingMeal.setNotes(meal.getNotes());
                        return mealRepository.save(existingMeal);
                    }
                    return null;
                })
                .orElse(null);
    }

    public void deleteMeal(String id) {
        mealRepository.deleteById(id);
    }
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\service\MoodService.java
================================================================================

package com.echobody.service;

import com.echobody.model.MoodEntry;
import com.echobody.repository.MoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class MoodService {
    @Autowired
    private MoodRepository moodRepository;

    public List<MoodEntry> getMoodEntries(String userId) {
        return moodRepository.findByUserIdOrderByDateDesc(userId);
    }

    public MoodEntry addMoodEntry(MoodEntry entry, String userId) {
        entry.setUserId(userId);
        if (entry.getDate() == null) {
            entry.setDate(LocalDateTime.now());
        }
        return moodRepository.save(entry);
    }

    public void deleteMoodEntry(String id) {
        moodRepository.deleteById(id);
    }
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\service\UserService.java
================================================================================

package com.echobody.service;

import com.echobody.model.User;
import com.echobody.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User updateUserProfile(String email, User updatedUser) {
        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isPresent()) {
            User existingUser = userOpt.get();
            existingUser.setName(updatedUser.getName());
            existingUser.setAge(updatedUser.getAge());
            existingUser.setHeight_cm(updatedUser.getHeight_cm());
            existingUser.setWeight_kg(updatedUser.getWeight_kg());
            existingUser.setGoal(updatedUser.getGoal());
            existingUser.setGender(updatedUser.getGender());
            return userRepository.save(existingUser);
        }
        return null; // Or throw exception
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\service\WorkoutService.java
================================================================================

package com.echobody.service;

import com.echobody.model.Workout;
import com.echobody.repository.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class WorkoutService {

    @Autowired
    private WorkoutRepository workoutRepository;

    public List<Workout> getUserWorkouts(String userId) {
        return workoutRepository.findByUserIdOrderByDateDesc(userId);
    }

    public Workout logWorkout(Workout workout, String userId) {
        workout.setUserId(userId);
        if (workout.getDate() == null) {
            workout.setDate(LocalDateTime.now());
        }
        return workoutRepository.save(workout);
    }

    public Workout updateWorkout(String id, Workout workout, String userId) {
        return workoutRepository.findById(id)
                .map(existingWorkout -> {
                    if (existingWorkout.getUserId().equals(userId)) {
                        existingWorkout.setName(workout.getName());
                        existingWorkout.setMuscleGroup(workout.getMuscleGroup());
                        existingWorkout.setSets(workout.getSets());
                        existingWorkout.setReps(workout.getReps());
                        existingWorkout.setWeight(workout.getWeight());
                        existingWorkout.setCaloriesBurned(workout.getCaloriesBurned());
                        existingWorkout.setNotes(workout.getNotes());
                        return workoutRepository.save(existingWorkout);
                    }
                    return null;
                })
                .orElse(null);
    }

    public void deleteWorkout(String id) {
        workoutRepository.deleteById(id);
    }
}


================================================================================
FILE PATH: backend\src\main\java\com\echobody\WebConfig.java
================================================================================

package com.echobody;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOriginPatterns("http://localhost:*")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}


================================================================================
FILE PATH: backend\src\main\resources\application.properties
================================================================================

spring.application.name=echobody
server.port=8081

# MongoDB connection
spring.data.mongodb.uri=${MONGODB_URI:mongodb://localhost:27017/echobodydb}
spring.data.mongodb.database=echobodydb
app.jwt.secret=${JWT_SECRET:ThisIsASuperSecretAndLongEnoughKeyToSignJWTsForEchobodyApp_ChangeThisToAnythingSecure1234567890}


================================================================================
FILE PATH: backend\src\test\java\com\echobody\EchobodyApplicationTests.java
================================================================================

package com.echobody;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class EchobodyApplicationTests {

	@Test
	void contextLoads() {
	}

}


================================================================================
FILE PATH: frontend\components.json
================================================================================

{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}


================================================================================
FILE PATH: frontend\eslint.config.js
================================================================================

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
);


================================================================================
FILE PATH: frontend\index.html
================================================================================

<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>EchoBody - Your Wellness Companion</title>
    <meta name="description" content="Track your fitness, nutrition, mood, and wellness with EchoBody - Your complete wellness tracking platform" />
    <meta name="author" content="EchoBody" />

    <meta property="og:title" content="EchoBody - Your Wellness Companion" />
    <meta property="og:description" content="Track your fitness, nutrition, mood, and wellness with EchoBody" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@lovable_dev" />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>


================================================================================
FILE PATH: frontend\package.json
================================================================================

{
  "name": "vite_react_shadcn_ts",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@radix-ui/react-accordion": "^1.2.11",
    "@radix-ui/react-alert-dialog": "^1.1.14",
    "@radix-ui/react-aspect-ratio": "^1.1.7",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-checkbox": "^1.3.2",
    "@radix-ui/react-collapsible": "^1.1.11",
    "@radix-ui/react-context-menu": "^2.2.15",
    "@radix-ui/react-dialog": "^1.1.14",
    "@radix-ui/react-dropdown-menu": "^2.1.15",
    "@radix-ui/react-hover-card": "^1.1.14",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-menubar": "^1.1.15",
    "@radix-ui/react-navigation-menu": "^1.2.13",
    "@radix-ui/react-popover": "^1.1.14",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.7",
    "@radix-ui/react-scroll-area": "^1.2.9",
    "@radix-ui/react-select": "^2.2.5",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slider": "^1.3.5",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.5",
    "@radix-ui/react-tabs": "^1.1.12",
    "@radix-ui/react-toast": "^1.2.14",
    "@radix-ui/react-toggle": "^1.1.9",
    "@radix-ui/react-toggle-group": "^1.1.10",
    "@radix-ui/react-tooltip": "^1.2.7",
    "@tanstack/react-query": "^5.83.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.6.0",
    "framer-motion": "^12.23.24",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.462.0",
    "next-themes": "^0.3.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.61.1",
    "react-resizable-panels": "^2.1.9",
    "react-router-dom": "^6.30.1",
    "recharts": "^2.15.4",
    "sonner": "^1.7.4",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.9",
    "zod": "^3.25.76"
  },
  "devDependencies": {
    "@eslint/js": "^9.32.0",
    "@tailwindcss/typography": "^0.5.16",
    "@types/node": "^22.16.5",
    "@types/react": "^18.3.23",
    "@types/react-dom": "^18.3.7",
    "@vitejs/plugin-react-swc": "^3.11.0",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.32.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^15.15.0",
    "lovable-tagger": "^1.1.11",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.8.3",
    "typescript-eslint": "^8.38.0",
    "vite": "^5.4.19"
  }
}


================================================================================
FILE PATH: frontend\postcss.config.js
================================================================================

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};


================================================================================
FILE PATH: frontend\public\robots.txt
================================================================================

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /


================================================================================
FILE PATH: frontend\README.md
================================================================================

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/990ba200-6a51-4a43-adef-581625cb0e91

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/990ba200-6a51-4a43-adef-581625cb0e91) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/990ba200-6a51-4a43-adef-581625cb0e91) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)


================================================================================
FILE PATH: frontend\src\App.css
================================================================================

#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #ff004daa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #ff004daa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #b3b3b3;
}


================================================================================
FILE PATH: frontend\src\App.tsx
================================================================================

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginV2 } from "./pages/LoginV2";
import { Register } from "./pages/Register";
import DashboardV2 from "./pages/DashboardV2"; // Import DashboardV2
import WorkoutsV2 from "./pages/WorkoutsV2";
import NutritionV2 from "./pages/NutritionV2";
import MoodV2 from "./pages/MoodV2";
import ProgressV2 from "./pages/ProgressV2";
import ProfileV2 from "./pages/ProfileV2";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage"; // Import HomePage
import Pricing from "./pages/Pricing"; // Import Pricing
import About from "./pages/About"; // Import About
import Layout from "./components/Layout"; // Import Layout

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Set HomePage as default */}
          <Route path="/home" element={<HomePage />} /> {/* Add /home route */}
          <Route path="/pricing" element={<Pricing />} /> {/* Add Pricing route */}
          <Route path="/about" element={<About />} /> {/* Add About route */}
          <Route path="/login" element={<LoginV2 />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute><Layout><DashboardV2 /></Layout></ProtectedRoute>}
          />
          <Route
            path="/workouts"
            element={<ProtectedRoute><Layout><WorkoutsV2 /></Layout></ProtectedRoute>}
          />
          <Route
            path="/nutrition"
            element={<ProtectedRoute><Layout><NutritionV2 /></Layout></ProtectedRoute>}
          />
          <Route
            path="/mood"
            element={<ProtectedRoute><Layout><MoodV2 /></Layout></ProtectedRoute>}
          />
          <Route
            path="/progress"
            element={<ProtectedRoute><Layout><ProgressV2 /></Layout></ProtectedRoute>}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute><Layout><ProfileV2 /></Layout></ProtectedRoute>}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

================================================================================
FILE PATH: frontend\src\components\dashboard\AnimatedHero.tsx
================================================================================


import React from "react";
import { motion } from "framer-motion";

export default function AnimatedHero({ name = "Athlete", score = 72 }) {
  const circumference = 2 * Math.PI * 15.9155;
  const scoreOffset = circumference - (score / 100) * circumference;

  return (
    <section className="relative overflow-hidden mb-8">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 to-secondary/5 blur-3xl -z-10" />
      <div className="max-w-7xl mx-auto px-1 py-12 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left space-y-2">
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-2"
            >
              Welcome back, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-lg text-glow">{name}!</span>
            </motion.h1>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground text-lg max-w-lg"
            >
              Your daily metrics are looking strong. Keep up the momentum.
            </motion.p>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="w-40 h-40 glass-card rounded-2xl flex items-center justify-center shadow-neon relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
            <svg viewBox="0 0 36 36" className="w-32 h-32 -rotate-90 relative z-10">
              <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--secondary))" />
                </linearGradient>
              </defs>
              <circle
                cx="18"
                cy="18"
                r="15.9155"
                className="text-white/5 stroke-current"
                strokeWidth="3"
                fill="transparent"
              />
              <motion.circle
                cx="18"
                cy="18"
                r="15.9155"
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: scoreOffset }}
                transition={{ duration: 1.8, delay: 0.5, ease: "easeOut" }}
                strokeLinecap="round"
                strokeWidth="3"
                stroke="url(#scoreGradient)"
                fill="transparent"
                strokeDasharray={`${circumference} ${circumference}`}
                className="filter drop-shadow-[0_0_4px_rgba(0,255,225,0.5)]"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center z-10">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-4xl font-bold text-white text-glow"
              >
                {score}
              </motion.span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">EchoScore</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


================================================================================
FILE PATH: frontend\src\components\dashboard\EchoScoreCard.tsx
================================================================================

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const data = [{ name: "Score", value: 82 }];
const COLORS = ["#3b82f6", "#e5e7eb"];

export function EchoScoreCard() {
  return (
    <Card className="h-full transition-shadow duration-300 hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Your EchoScore</CardTitle>
        <CardDescription>A holistic measure of your well-being.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-6 md:flex-row">
        <div className="relative h-48 w-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={[{ value: 82 }, { value: 18 }]}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                startAngle={90}
                endAngle={450}
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              >
                <Cell fill={COLORS[0]} />
                <Cell fill={COLORS[1]} />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-primary">82</span>
            <span className="text-sm text-muted-foreground">Excellent</span>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Keep up the great work!</h3>
          <p className="text-muted-foreground">
            Your score is based on your recent activity, nutrition, and mood logs.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}


================================================================================
FILE PATH: frontend\src\components\dashboard\InsightsFeed.tsx
================================================================================


import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Insight {
  id: string;
  title: string;
  description: string;
}

const insights: Insight[] = [
  {
    id: "1",
    title: "New Peak Performance",
    description: "You hit a new personal best in your last workout!",
  },
  {
    id: "2",
    title: "Mindful Moment",
    description: "You've logged a mood entry for 5 days in a row.",
  },
  {
    id: "3",
    title: "Nutrition Tip",
    description: "Consider adding more protein to your next meal.",
  },
  {
    id: "4",
    title: "Consistency is Key",
    description: "You've maintained your workout schedule for 3 weeks straight.",
  },
];

export default function InsightsFeed() {
  return (
    <Card className="h-full card-glass">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Your Insights</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <AnimatePresence>
          {insights.map((insight, index) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-4 rounded-lg bg-background/50 shadow-sm border border-border focus-outline"
              tabIndex={0}
              aria-label={`${insight.title}: ${insight.description}`}
            >
              <h3 className="font-semibold text-foreground">{insight.title}</h3>
              <p className="text-sm text-muted-foreground">{insight.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}


================================================================================
FILE PATH: frontend\src\components\dashboard\QuickActions.tsx
================================================================================

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dumbbell, Utensils, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const actions = [
  {
    label: "Log Workout",
    sub: "Track your lifts",
    icon: <Dumbbell className="h-6 w-6" />,
    path: "/workouts",
    gradient: "from-cyan-500 to-blue-600",
    shadow: "shadow-cyan-500/50",
  },
  {
    label: "Log Meal",
    sub: "Count your macros",
    icon: <Utensils className="h-6 w-6" />,
    path: "/nutrition",
    gradient: "from-emerald-400 to-green-600",
    shadow: "shadow-emerald-500/50",
  },
  {
    label: "Log Mood",
    sub: "Record how you feel",
    icon: <Heart className="h-6 w-6" />,
    path: "/mood",
    gradient: "from-rose-500 to-purple-600",
    shadow: "shadow-rose-500/50",
  },
];

export default function QuickActions() {
  return (
    <Card className="h-full glass-card border-none">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
          <span className="w-1 h-6 bg-primary rounded-full" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {actions.map((action, index) => (
          <motion.div
            key={action.label}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index + 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link to={action.path} className="block group">
              <div
                className={`w-full p-4 rounded-xl relative overflow-hidden flex items-center gap-4 bg-gradient-to-r ${action.gradient} transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]`}
              >
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  {action.icon}
                </div>
                <div className="flex-1 text-white">
                  <div className="font-bold text-lg leading-tight">{action.label}</div>
                  <div className="text-xs text-white/80">{action.sub}</div>
                </div>
                {/* Shine effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
              </div>
            </Link>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
}

================================================================================
FILE PATH: frontend\src\components\dashboard\StatCard.tsx
================================================================================

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  accent: string;
  percent?: number;
  icon?: React.ReactNode;
}

export default function StatCard({
  title,
  value,
  accent, // Expecting gradient classes like "from-primary to-secondary"
  percent,
  icon,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="glass-card rounded-xl overflow-hidden relative group"
    >
      <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${accent} opacity-50 group-hover:opacity-100 transition-opacity`} />

      <Card className="bg-transparent border-none shadow-none relative z-10">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          {icon}
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-extrabold text-white tracking-tight">{value}</div>
          {percent !== undefined && (
            <div className="h-1.5 w-full rounded-full bg-white/10 mt-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className={`h-full rounded-full bg-gradient-to-r ${accent} shadow-[0_0_10px_rgba(255,255,255,0.3)]`}
              />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Glow Effect */}
      <div className={`absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br ${accent} rounded-full blur-[40px] opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none`} />
    </motion.div>
  );
}

================================================================================
FILE PATH: frontend\src\components\Layout.tsx
================================================================================

import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto lg:ml-64 p-8 relative z-[10]">{children}</main>
    </div>
  );
};

export default Layout;

================================================================================
FILE PATH: frontend\src\components\mood\MoodChart.tsx
================================================================================

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoodEntry } from "@/services/moodService";

interface MoodChartProps {
    entries: MoodEntry[];
}

export default function MoodChart({ entries }: MoodChartProps) {
    // Map mood strings to numbers for charting
    const moodValueMap: Record<string, number> = {
        "Great": 5, "Good": 4, "Okay": 3, "Low": 2, "Poor": 1,
        "😊": 5, "🙂": 4, "😐": 3, "😕": 2, "😢": 1 // Handle emojis too just in case
    };

    const data = entries.map(entry => ({
        date: new Date(entry.date || "").toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
        moodScore: moodValueMap[entry.mood] || 3,
        energy: entry.energy
    })).slice(-7); // Last 7 entries

    return (
        <Card className="glass-card mb-8">
            <CardHeader>
                <CardTitle className="text-white">Mood vs Energy (Last 7 Days)</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <XAxis dataKey="date" stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} domain={[0, 10]} />
                        <Tooltip
                            contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
                        />
                        <Legend wrapperStyle={{ paddingTop: '10px' }} />
                        <Line type="monotone" dataKey="moodScore" name="Mood (1-5)" stroke="#a855f7" strokeWidth={3} dot={{ r: 4, fill: '#a855f7' }} />
                        <Line type="monotone" dataKey="energy" name="Energy (1-10)" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4, fill: '#f59e0b' }} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}


================================================================================
FILE PATH: frontend\src\components\mood\MoodDetailModal.tsx
================================================================================


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { X, Zap } from "lucide-react";

interface MoodDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (moodEntry: any) => void; // Replace 'any' with actual MoodEntry type
  initialEntry?: {
    id?: string;
    date?: string;
    mood?: string;
    energy?: number;
    notes?: string;
  } | null;
}

const moodOptions = [
  { label: "Great", emoji: "😊" },
  { label: "Good", emoji: "🙂" },
  { label: "Okay", emoji: "😐" },
  { label: "Low", emoji: "😟" },
  { label: "Poor", emoji: "😞" },
];

export default function MoodDetailModal({
  isOpen,
  onClose,
  onSave,
  initialEntry,
}: MoodDetailModalProps) {
  const [selectedMood, setSelectedMood] = useState(initialEntry?.mood || "Okay");
  const [energyLevel, setEnergyLevel] = useState(initialEntry?.energy || 5);
  const [notes, setNotes] = useState(initialEntry?.notes || "");

  useEffect(() => {
    if (initialEntry) {
      setSelectedMood(initialEntry.mood || "Okay");
      setEnergyLevel(initialEntry.energy || 5);
      setNotes(initialEntry.notes || "");
    } else {
      setSelectedMood("Okay");
      setEnergyLevel(5);
      setNotes("");
    }
  }, [initialEntry]);

  const handleSubmit = () => {
    const newEntry = {
      id: initialEntry?.id || Date.now().toString(), // Simple ID generation
      date: initialEntry?.date || new Date().toISOString().split("T")[0],
      mood: selectedMood,
      energy: energyLevel,
      notes,
    };
    onSave(newEntry);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent
            className="sm:max-w-[425px] p-0 overflow-hidden card-glass border-none"
            onEscapeKeyDown={onClose}
            onPointerDownOutside={onClose}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <DialogHeader className="relative pb-4">
                <DialogTitle className="text-2xl font-bold text-foreground">
                  {initialEntry ? "Edit Mood Entry" : "Log New Mood"}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Reflect on your emotional and energy state.
                </DialogDescription>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 rounded-full focus-outline"
                  onClick={onClose}
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </Button>
              </DialogHeader>

              <div className="grid gap-6 py-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">How are you feeling?</h3>
                  <div className="flex justify-around gap-2">
                    {moodOptions.map((option) => (
                      <motion.button
                        key={option.label}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedMood(option.label)}
                        className={`p-3 rounded-lg text-4xl transition-all focus-outline ${selectedMood === option.label
                            ? "bg-primary/20 ring-2 ring-primary" : "bg-muted/30 hover:bg-muted/50"}
                        `}
                        aria-pressed={selectedMood === option.label}
                        aria-label={`Set mood to ${option.label}`}
                      >
                        {option.emoji}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-400" /> Energy Level: <span className="text-primary">{energyLevel}/10</span>
                  </h3>
                  <Slider
                    min={1}
                    max={10}
                    step={1}
                    value={[energyLevel]}
                    onValueChange={(val) => setEnergyLevel(val[0])}
                    className="w-full focus-outline"
                    aria-label="Energy level slider"
                    aria-valuemin={1}
                    aria-valuemax={10}
                    aria-valuenow={energyLevel}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Notes (Optional)</h3>
                  <Textarea
                    placeholder="Any thoughts or observations?"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="min-h-[80px] focus-outline"
                    aria-label="Mood notes"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-border mt-4">
                <Button onClick={handleSubmit} className="focus-outline mood-animated">
                  {initialEntry ? "Save Changes" : "Log Mood"}
                </Button>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}


================================================================================
FILE PATH: frontend\src\components\mood\MoodEntryCard.tsx
================================================================================


import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Zap } from "lucide-react";

import { MoodEntry } from "@/services/moodService";

interface MoodEntryCardProps {
  entry: MoodEntry;
  onSelect: (entryId: string) => void;
  onEdit: (entryId: string) => void;
  onDelete: (entryId: string) => void;
}

const getMoodEmoji = (mood: string) => {
  switch (mood.toLowerCase()) {
    case "great":
      return "😊";
    case "good":
      return "🙂";
    case "okay":
      return "😐";
    case "low":
      return "😟";
    case "poor":
      return "😞";
    default:
      return "";
  }
};

export default function MoodEntryCard({
  entry,
  onSelect,
  onEdit,
  onDelete,
}: MoodEntryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01, boxShadow: "0 10px 20px rgba(0,255,220,0.1)" }}
      className="mood-neon rounded-xl overflow-hidden cursor-pointer focus-outline"
      onClick={() => entry.id && onSelect(entry.id)}
      tabIndex={0}
      role="button"
      aria-label={`View details for mood on ${entry.date}`}
    >
      <Card className="bg-transparent border-none shadow-none">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="text-2xl">{getMoodEmoji(entry.mood)}</span> {entry.mood}
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            {entry.date ? new Date(entry.date).toLocaleDateString() : 'Just now'}
          </p>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <p className="flex items-center gap-1">
            <Zap className="h-4 w-4 text-yellow-400" /> Energy: <span className="text-foreground font-medium">{entry.energy}/10</span>
          </p>
          {entry.notes && (
            <p className="mt-2 line-clamp-2">Notes: <span className="text-foreground font-medium">{entry.notes}</span></p>
          )}
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              entry.id && onEdit(entry.id);
            }}
            aria-label={`Edit mood`}
            className="focus-outline"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              entry.id && onDelete(entry.id);
            }}
            aria-label={`Delete mood`}
            className="focus-outline"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}


================================================================================
FILE PATH: frontend\src\components\mood\MoodFormModal.tsx
================================================================================


import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { moodService } from '@/services/moodService';
import { toast } from 'sonner';

const moodSchema = z.object({
    mood: z.string().min(1, "Mood is required"),
    energy: z.number().min(1).max(10),
    notes: z.string().optional(),
});

type MoodFormValues = z.infer<typeof moodSchema>;

interface MoodFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MoodFormModal({ isOpen, onClose }: MoodFormModalProps) {
    const queryClient = useQueryClient();

    const form = useForm<MoodFormValues>({
        resolver: zodResolver(moodSchema),
        defaultValues: {
            mood: 'Good',
            energy: 5,
            notes: '',
        },
    });

    const mutation = useMutation({
        mutationFn: moodService.create,
        onSuccess: () => {
            toast.success("Mood logged successfully!");
            queryClient.invalidateQueries({ queryKey: ['moods'] });
            form.reset();
            onClose();
        },
        onError: () => {
            toast.error("Failed to log mood.");
        },
    });

    const onSubmit = (data: MoodFormValues) => {
        mutation.mutate(data);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] card-glass border-primary/20">
                <DialogHeader>
                    <DialogTitle>Log Your Mood</DialogTitle>
                    <DialogDescription>How are you feeling right now?</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                        <FormField
                            control={form.control}
                            name="mood"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mood</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select mood" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Great">Great 🤩</SelectItem>
                                            <SelectItem value="Good">Good 🙂</SelectItem>
                                            <SelectItem value="Okay">Okay 😐</SelectItem>
                                            <SelectItem value="Low">Low 😔</SelectItem>
                                            <SelectItem value="Bad">Bad 😫</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="energy"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Energy Level ({field.value}/10)</FormLabel>
                                    <FormControl>
                                        <Slider
                                            min={1}
                                            max={10}
                                            step={1}
                                            value={[field.value]}
                                            onValueChange={(vals) => field.onChange(vals[0])}
                                            className="py-4"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="notes"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Notes (Optional)</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Why do you feel this way?" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-end gap-2 pt-4">
                            <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
                            <Button type="submit" disabled={mutation.isPending}>Save</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}


================================================================================
FILE PATH: frontend\src\components\mood\MoodList.tsx
================================================================================


import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import MoodEntryCard from "./MoodEntryCard";
import { Skeleton } from "@/components/ui/skeleton";

import { MoodEntry } from "@/services/moodService";

interface MoodListProps {
  entries: MoodEntry[];
  onSelect: (entryId: string) => void;
  onEdit: (entryId: string) => void;
  onDelete: (entryId: string) => void;
  loading: boolean;
}

export default function MoodList({
  entries,
  onSelect,
  onEdit,
  onDelete,
  loading,
}: MoodListProps) {
  if (loading && entries.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-40 w-full" />
        ))}
      </div>
    );
  }

  if (entries.length === 0 && !loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12 text-muted-foreground"
      >
        <p className="text-lg">No mood entries yet. Log your first mood!</p>
      </motion.div>
    );
  }

  return (
    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <AnimatePresence>
        {entries.map((entry) => (
          <motion.div
            key={entry.id}
            layout
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <MoodEntryCard
              entry={entry}
              onSelect={onSelect}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}


================================================================================
FILE PATH: frontend\src\components\mood\MoodToolbar.tsx
================================================================================


import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

interface MoodToolbarProps {
  onLogMood: () => void;
}

export default function MoodToolbar({ onLogMood }: MoodToolbarProps) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between mb-8"
    >
      <h1 className="text-3xl font-bold text-foreground">Mood & Energy</h1>
      <Button onClick={onLogMood} className="focus-outline" aria-label="Log new mood">
        <PlusCircle className="mr-2 h-5 w-5" />
        Log Mood
      </Button>
    </motion.div>
  );
}


================================================================================
FILE PATH: frontend\src\components\nutrition\MealCard.tsx
================================================================================


import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Utensils, Flame, Milk, Beef, Carrot } from "lucide-react";

import { Meal } from "@/services/nutritionService";

interface MealCardProps {
  meal: Meal;
  onSelect: (mealId: string) => void;
  onEdit: (mealId: string) => void;
  onDelete: (mealId: string) => void;
}

const getMealIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case "breakfast":
      return <Milk className="h-5 w-5 text-yellow-500" />;
    case "lunch":
      return <Carrot className="h-5 w-5 text-orange-500" />;
    case "dinner":
      return <Beef className="h-5 w-5 text-red-500" />;
    case "snack":
      return <Utensils className="h-5 w-5 text-green-500" />;
    default:
      return <Utensils className="h-5 w-5 text-primary" />;
  }
};

export default function MealCard({
  meal,
  onSelect,
  onEdit,
  onDelete,
}: MealCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01, boxShadow: "0 10px 20px rgba(0,255,220,0.1)" }}
      className="nutrition-neon rounded-xl overflow-hidden cursor-pointer focus-outline"
      onClick={() => meal.id && onSelect(meal.id)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${meal.title} at ${meal.time || 'unknown time'}`}
    >
      <Card className="bg-transparent border-none shadow-none">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
              {getMealIcon(meal.type)} {meal.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {meal.dateTime ? new Date(meal.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
            </p>
          </div>
          <p className="text-sm text-muted-foreground">{meal.notes || ''}</p>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <div className="flex items-center gap-1 mb-1">
            <Flame className="h-4 w-4 text-orange-400" /> Calories: <span className="text-foreground font-medium">{meal.calories} kcal</span>
          </div>
          <div className="flex justify-between text-xs">
            <span>Protein: <span className="font-medium">{meal.protein}g</span></span>
            <span>Carbs: <span className="font-medium">{meal.carbs}g</span></span>
            <span>Fat: <span className="font-medium">{meal.fat}g</span></span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              if (meal.id) onEdit(meal.id);
            }}
            aria-label={`Edit ${meal.title}`}
            className="focus-outline"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              if (meal.id) onDelete(meal.id);
            }}
            aria-label={`Delete ${meal.title}`}
            className="focus-outline"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}


================================================================================
FILE PATH: frontend\src\components\nutrition\MealDetailModal.tsx
================================================================================


import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Utensils, Flame, Milk, Beef, Carrot, Edit, X } from "lucide-react";

interface MealDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  meal: {
    id: string;
    time: string;
    title: string;
    shortDesc: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    type: string;
    notes?: string;
  } | null;
  onEdit: (mealId: string) => void;
}

const getMealIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case "breakfast":
      return <Milk className="h-6 w-6 text-yellow-500" />;
    case "lunch":
      return <Carrot className="h-6 w-6 text-orange-500" />;
    case "dinner":
      return <Beef className="h-6 w-6 text-red-500" />;
    case "snack":
      return <Utensils className="h-6 w-6 text-green-500" />;
    default:
      return <Utensils className="h-6 w-6 text-primary" />;
  }
};

export default function MealDetailModal({
  isOpen,
  onClose,
  meal,
  onEdit,
}: MealDetailModalProps) {
  if (!meal) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent
            className="sm:max-w-[425px] p-0 overflow-hidden card-glass border-none"
            onEscapeKeyDown={onClose}
            onPointerDownOutside={onClose}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <DialogHeader className="relative pb-4">
                <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                  {getMealIcon(meal.type)} {meal.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground flex items-center gap-1">
                  {meal.shortDesc} - {meal.time}
                </DialogDescription>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 rounded-full focus-outline"
                  onClick={onClose}
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </Button>
              </DialogHeader>

              <div className="grid gap-4 py-4">
                <div className="flex items-center gap-2">
                  <Flame className="h-5 w-5 text-orange-400" />
                  <span className="text-muted-foreground">Calories:</span>
                  <span className="font-semibold text-foreground">{meal.calories} kcal</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Protein:</span>
                  <span className="font-semibold text-foreground">{meal.protein}g</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Carbs:</span>
                  <span className="font-semibold text-foreground">{meal.carbs}g</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Fat:</span>
                  <span className="font-semibold text-foreground">{meal.fat}g</span>
                </div>
                {meal.notes && (
                  <div>
                    <h4 className="font-semibold text-foreground mt-2">Notes:</h4>
                    <p className="text-muted-foreground text-sm">{meal.notes}</p>
                  </div>
                )}
              </div>

              <div className="flex justify-end pt-4 border-t border-border mt-4">
                <Button onClick={() => onEdit(meal.id)} className="focus-outline">
                  <Edit className="mr-2 h-4 w-4" /> Edit Meal
                </Button>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}


================================================================================
FILE PATH: frontend\src\components\nutrition\MealFormModal.tsx
================================================================================


import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { nutritionService } from "@/services/nutritionService";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const formSchema = z.object({
    title: z.string().min(2, "Title is required."),
    calories: z.coerce.number().min(0, "Calories must be positive"),
    protein: z.coerce.number().min(0),
    carbs: z.coerce.number().min(0),
    fat: z.coerce.number().min(0),
    type: z.string().min(1, "Type is required"),
    notes: z.string().optional(),
});

interface Meal {
    id?: string;
    title: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    type: string;
    notes?: string;
    dateTime?: string;
}

interface MealFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialData?: Meal | null;
}

export default function MealFormModal({ isOpen, onClose, initialData }: MealFormModalProps) {
    const queryClient = useQueryClient();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            calories: 0,
            protein: 0,
            carbs: 0,
            fat: 0,
            type: "breakfast",
            notes: "",
        },
    });

    React.useEffect(() => {
        if (initialData) {
            form.reset({
                title: initialData.title,
                calories: initialData.calories,
                protein: initialData.protein,
                carbs: initialData.carbs,
                fat: initialData.fat,
                type: initialData.type,
                notes: initialData.notes || "",
            });
        } else {
            form.reset({
                title: "",
                calories: 0,
                protein: 0,
                carbs: 0,
                fat: 0,
                type: "breakfast",
                notes: "",
            });
        }
    }, [initialData, form, isOpen]);

    const mutation = useMutation({
        mutationFn: (values: z.infer<typeof formSchema>) => {
            if (initialData?.id) {
                return nutritionService.update(initialData.id, values as any);
            }
            return nutritionService.create(values as any);
        },
        onSuccess: () => {
            toast.success(initialData ? "Meal updated!" : "Meal logged successfully!");
            queryClient.invalidateQueries({ queryKey: ['meals'] });
            queryClient.invalidateQueries({ queryKey: ['dashboardSummary'] });
            form.reset();
            onClose();
        },
        onError: (error) => {
            toast.error(`Failed to log meal: ${error}`);
        }
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        mutation.mutate(values);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] card-glass">
                <DialogHeader>
                    <DialogTitle>{initialData ? "Edit Meal" : "Log Meal"}</DialogTitle>
                    <DialogDescription>
                        {initialData ? "Update your meal details." : "Track your nutrition."}
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Meal Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. Chicken Salad" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="type"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="breakfast">Breakfast</SelectItem>
                                                <SelectItem value="lunch">Lunch</SelectItem>
                                                <SelectItem value="dinner">Dinner</SelectItem>
                                                <SelectItem value="snack">Snack</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="calories"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Calories</FormLabel>
                                        <FormControl>
                                            <Input type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <FormField
                                control={form.control}
                                name="protein"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Protein (g)</FormLabel>
                                        <FormControl>
                                            <Input type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="carbs"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Carbs (g)</FormLabel>
                                        <FormControl>
                                            <Input type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="fat"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Fat (g)</FormLabel>
                                        <FormControl>
                                            <Input type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="notes"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Notes</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Description..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end pt-2">
                            <Button type="button" variant="ghost" onClick={onClose} className="mr-2">Cancel</Button>
                            <Button type="submit" disabled={mutation.isPending}>
                                {mutation.isPending ? "Saving..." : (initialData ? "Update Meal" : "Log Meal")}
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}


================================================================================
FILE PATH: frontend\src\components\nutrition\MealList.tsx
================================================================================


import React from "react";
// forcing re-analysis
import { motion, AnimatePresence } from "framer-motion";
import MealCard from "./MealCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { Meal } from "@/services/nutritionService";

interface MealListProps {
  meals: Meal[];
  onSelect: (mealId: string) => void;
  onEdit: (mealId: string) => void;
  onDelete: (mealId: string) => void;
  loading: boolean;
  onLoadMore: () => void;
  hasMore: boolean;
}

export default function MealList({
  meals,
  onSelect,
  onEdit,
  onDelete,
  loading,
  onLoadMore,
  hasMore,
}: MealListProps) {
  if (loading && meals.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-48 w-full" />
        ))}
      </div>
    );
  }

  if (meals.length === 0 && !loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12 text-muted-foreground"
      >
        <p className="text-lg">No meals found for this day. Log your first meal!</p>
        {/* Potentially add a button to log new meal */}
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4"
      >
        <AnimatePresence>
          {meals.map((meal) => (
            <motion.div
              key={meal.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <MealCard
                meal={meal}
                onSelect={onSelect}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {hasMore && (
        <div className="flex justify-center mt-6">
          <Button onClick={onLoadMore} disabled={loading} className="focus-outline">
            {loading ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}
    </div>
  );
}


================================================================================
FILE PATH: frontend\src\components\nutrition\NutritionChart.tsx
================================================================================

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Meal } from "@/services/nutritionService";

interface NutritionChartProps {
  meals: Meal[];
}

export default function NutritionChart({ meals }: NutritionChartProps) {
  if (!meals || meals.length === 0) return null;

  // Group meals by date
  const groupedData = meals.reduce((acc, meal) => {
    let date = "N/A";
    if (meal.dateTime) {
      const d = new Date(meal.dateTime);
      if (!isNaN(d.getTime())) {
        date = d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
      }
    }

    if (!acc[date]) {
      acc[date] = { date, protein: 0, carbs: 0, fat: 0 };
    }
    acc[date].protein += meal.protein;
    acc[date].carbs += meal.carbs;
    acc[date].fat += meal.fat;
    return acc;
  }, {} as Record<string, any>);

  const data = Object.values(groupedData).slice(-7);

  return (
    <Card className="glass-card mb-8">
      <CardHeader>
        <CardTitle className="text-white">Macro Breakdown (Last 7 Days)</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="date" stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              cursor={{ fill: 'rgba(255,255,255,0.05)' }}
              contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
            />
            <Legend wrapperStyle={{ paddingTop: '10px' }} />
            <Bar dataKey="protein" stackId="a" fill="#38bdf8" name="Protein" radius={[0, 0, 4, 4]} />
            <Bar dataKey="carbs" stackId="a" fill="#2dd4bf" name="Carbs" />
            <Bar dataKey="fat" stackId="a" fill="#f43f5e" name="Fat" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}


================================================================================
FILE PATH: frontend\src\components\nutrition\NutritionToolbar.tsx
================================================================================


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, PlusCircle, Calendar as CalendarIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

interface NutritionToolbarProps {
  onSearch: (query: string) => void;
  onFilter: (filter: string) => void;
  onNewMeal: () => void;
  onDateChange: (date: Date | undefined) => void;
}

export default function NutritionToolbar({
  onSearch,
  onFilter,
  onNewMeal,
  onDateChange,
}: NutritionToolbarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery, onSearch]);

  useEffect(() => {
    onDateChange(date);
  }, [date, onDateChange]);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8"
    >
      <h1 className="text-3xl font-bold text-foreground">Your Nutrition</h1>
      <div className="flex items-center gap-4 w-full md:w-auto">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={`w-[180px] justify-start text-left font-normal focus-outline ${!date && "text-muted-foreground"}`}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search meals..."
            className="pl-10 w-full focus-outline"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search meals"
          />
        </div>
        <Select onValueChange={onFilter} aria-label="Filter meals">
          <SelectTrigger className="w-[180px] focus-outline">
            <SelectValue placeholder="Filter by..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="breakfast">Breakfast</SelectItem>
            <SelectItem value="lunch">Lunch</SelectItem>
            <SelectItem value="dinner">Dinner</SelectItem>
            <SelectItem value="snack">Snack</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={onNewMeal} className="focus-outline" aria-label="Log new meal">
          <PlusCircle className="mr-2 h-5 w-5" />
          Log Meal
        </Button>
      </div>
    </motion.div>
  );
}


================================================================================
FILE PATH: frontend\src\components\profile\EditProfileModal.tsx
================================================================================


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedUser: any) => void; // Replace 'any' with actual User type
  currentUser: any; // Replace 'any' with actual User type
}

export default function EditProfileModal({
  isOpen,
  onClose,
  onSave,
  currentUser,
}: EditProfileModalProps) {
  const [name, setName] = useState(currentUser?.name || "");
  const [email, setEmail] = useState(currentUser?.email || "");
  const [age, setAge] = useState(currentUser?.age || "");
  const [height_cm, setHeight_cm] = useState(currentUser?.height_cm || "");
  const [weight_kg, setWeight_kg] = useState(currentUser?.weight_kg || "");
  const [gender, setGender] = useState(currentUser?.gender || "");
  const [goal, setGoal] = useState(currentUser?.goal || "");

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || "");
      setEmail(currentUser.email || "");
      setAge(currentUser.age || "");
      setHeight_cm(currentUser.height_cm || "");
      setWeight_kg(currentUser.weight_kg || "");
      setGender(currentUser.gender || "");
      setGoal(currentUser.goal || "");
    }
  }, [currentUser]);

  const handleSubmit = async () => {
    const updatedUser = {
      ...currentUser,
      name,
      email,
      age: parseInt(age as string),
      height_cm: parseInt(height_cm as string),
      weight_kg: parseFloat(weight_kg as string),
      gender,
      goal,
    };

    // Placeholder for API call
    // const token = localStorage.getItem("token");
    // try {
    //   const response = await fetch("/api/profile/update", {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Authorization": `Bearer ${token}`,
    //     },
    //     body: JSON.stringify(updatedUser),
    //   });
    //   if (!response.ok) {
    //     throw new Error("Failed to update profile");
    //   }
    //   const data = await response.json();
    //   onSave(data); // Update local state with response from server
    //   onClose();
    // } catch (error) {
    //   console.error("Error updating profile:", error);
    //   // Handle error (e.g., show a toast notification)
    // }

    onSave(updatedUser); // For mock data, directly save
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent
            className="sm:max-w-[425px] p-0 overflow-hidden card-glass border-none"
            onEscapeKeyDown={onClose}
            onPointerDownOutside={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="edit-profile-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <DialogHeader className="relative pb-4">
                <DialogTitle id="edit-profile-title" className="text-2xl font-bold text-foreground">
                  Edit Profile
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Make changes to your profile here. Click save when you're done.
                </DialogDescription>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 rounded-full focus-outline"
                  onClick={onClose}
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </Button>
              </DialogHeader>

              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="col-span-3 focus-outline"
                    aria-label="Name"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="col-span-3 focus-outline"
                    aria-label="Email"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="age" className="text-right">
                    Age
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="col-span-3 focus-outline"
                    aria-label="Age"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="height" className="text-right">
                    Height (cm)
                  </Label>
                  <Input
                    id="height"
                    type="number"
                    value={height_cm}
                    onChange={(e) => setHeight_cm(e.target.value)}
                    className="col-span-3 focus-outline"
                    aria-label="Height in centimeters"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="weight" className="text-right">
                    Weight (kg)
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    value={weight_kg}
                    onChange={(e) => setWeight_kg(e.target.value)}
                    className="col-span-3 focus-outline"
                    aria-label="Weight in kilograms"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="gender" className="text-right">
                    Gender
                  </Label>
                  <Select value={gender} onValueChange={setGender}>
                    <SelectTrigger id="gender" className="col-span-3 focus-outline" aria-label="Gender">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="goal" className="text-right">
                    Goal
                  </Label>
                  <Input
                    id="goal"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="col-span-3 focus-outline"
                    aria-label="Fitness Goal"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-border mt-4">
                <Button onClick={handleSubmit} className="btn-neon focus-outline">
                  Save Changes
                </Button>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}


================================================================================
FILE PATH: frontend\src\components\profile\ProfileHeader.tsx
================================================================================


import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

interface ProfileHeaderProps {
  name: string;
  email: string;
  onEdit: () => void;
}

export default function ProfileHeader({
  name,
  email,
  onEdit,
}: ProfileHeaderProps) {
  const initial = name ? name.charAt(0).toUpperCase() : "U";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center justify-between p-6 rounded-lg profile-neon bg-card"
    >
      <div className="flex items-center gap-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative p-1 rounded-full profile-avatar"
        >
          <Avatar className="w-20 h-20 border-2 border-background">
            <AvatarFallback className="text-3xl font-bold text-primary-foreground bg-transparent">
              {initial}
            </AvatarFallback>
          </Avatar>
        </motion.div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-foreground">{name}</h2>
          <p className="text-muted-foreground">{email}</p>
        </div>
      </div>
      <Button
        onClick={onEdit}
        className="mt-4 md:mt-0 btn-neon focus-outline"
        aria-label="Edit Profile"
      >
        <Edit className="mr-2 h-4 w-4" /> Edit Profile
      </Button>
    </motion.div>
  );
}


================================================================================
FILE PATH: frontend\src\components\profile\ProfileStatsGrid.tsx
================================================================================


import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cake, Ruler, Scale, Heart, Target } from "lucide-react";

interface ProfileStatsGridProps {
  user: {
    age?: number;
    height_cm?: number;
    weight_kg?: number;
    gender?: string;
    goal?: string;
  };
}

const statItems = [
  { key: "age", label: "Age", icon: Cake, unit: "years" },
  { key: "height_cm", label: "Height", icon: Ruler, unit: "cm" },
  { key: "weight_kg", label: "Weight", icon: Scale, unit: "kg" },
  { key: "gender", label: "Gender", icon: Heart },
  { key: "goal", label: "Goal", icon: Target },
];

export default function ProfileStatsGrid({ user }: ProfileStatsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {statItems.map((item, index) => (
        <motion.div
          key={item.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index + 0.2, duration: 0.5 }}
          whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(0,255,209,0.1)" }}
          className="profile-neon rounded-lg overflow-hidden focus-outline"
          tabIndex={0}
          role="status"
          aria-label={`${item.label}: ${user[item.key as keyof typeof user]} ${item.unit || ""}`}
        >
          <Card className="bg-transparent border-none shadow-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {item.label}
              </CardTitle>
              {item.icon && <item.icon className="h-5 w-5 text-primary" />}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {user[item.key as keyof typeof user] || "N/A"} {item.unit}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}


================================================================================
FILE PATH: frontend\src\components\profile\ProfileSummaryCards.tsx
================================================================================


import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, CalendarDays, TrendingUp } from "lucide-react";

interface ProfileSummaryCardsProps {
  stats: {
    totalWorkouts: number;
    memberSince: string;
    currentStreak: number;
  };
}

const summaryItems = [
  { key: "totalWorkouts", label: "Total Workouts", icon: Dumbbell, unit: "" },
  { key: "memberSince", label: "Member Since", icon: CalendarDays, unit: "" },
  { key: "currentStreak", label: "Current Streak", icon: TrendingUp, unit: "days" },
];

export default function ProfileSummaryCards({ stats }: ProfileSummaryCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {summaryItems.map((item, index) => (
        <motion.div
          key={item.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index + 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(0,255,209,0.1)" }}
          className="profile-neon rounded-lg overflow-hidden focus-outline"
          tabIndex={0}
          role="status"
          aria-label={`${item.label}: ${stats[item.key as keyof typeof stats]} ${item.unit || ""}`}
        >
          <Card className="bg-transparent border-none shadow-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {item.label}
              </CardTitle>
              {item.icon && <item.icon className="h-5 w-5 text-primary" />}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {stats[item.key as keyof typeof stats]} {item.unit}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}


================================================================================
FILE PATH: frontend\src\components\progress\MiniSparkline.tsx
================================================================================


import React from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MiniSparklineProps {
  data: { name: string; value: number }[];
  title: string;
  value: string | number;
  color: string;
  ariaLabel: string;
}

export default function MiniSparkline({
  data,
  title,
  value,
  color,
  ariaLabel,
}: MiniSparklineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full progress-neon"
      role="img"
      aria-label={ariaLabel}
    >
      <Card className="bg-transparent border-none shadow-none">
        <CardHeader className="pb-0">
          <CardTitle className="text-md font-semibold text-muted-foreground">{title}</CardTitle>
          <div className="text-2xl font-bold text-foreground">{value}</div>
        </CardHeader>
        <CardContent className="h-20 p-0">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id={`color${title}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke={color}
                fillOpacity={1}
                fill={`url(#color${title})`}
                strokeWidth={2}
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
}


================================================================================
FILE PATH: frontend\src\components\progress\ProgressChart.tsx
================================================================================

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendPoint } from "@/services/progressService";

interface ProgressChartProps {
  data: TrendPoint[];
}

export default function ProgressChart({ data }: ProgressChartProps) {
  // Ensure we have data, otherwise show empty state or defaults
  const chartData = data.length > 0 ? data.map(point => ({
    date: new Date(point.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
    score: point.score
  })) : [];

  return (
    <Card className="glass-card mb-8">
      <CardHeader>
        <CardTitle className="text-white">EchoScore Trend (90 Days)</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
            <XAxis dataKey="date" stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} />
            <Tooltip
              contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
            />
            <Area type="monotone" dataKey="score" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}


================================================================================
FILE PATH: frontend\src\components\progress\RangeFilter.tsx
================================================================================


import React from "react";
import { motion } from "framer-motion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface RangeFilterProps {
  onRangeChange: (range: string) => void;
  initialRange?: string;
}

export default function RangeFilter({
  onRangeChange,
  initialRange = "90",
}: RangeFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Select onValueChange={onRangeChange} defaultValue={initialRange} aria-label="Select date range for progress data">
        <SelectTrigger className="w-[120px] focus-outline">
          <SelectValue placeholder="Select range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="30">Last 30 Days</SelectItem>
          <SelectItem value="60">Last 60 Days</SelectItem>
          <SelectItem value="90">Last 90 Days</SelectItem>
          <SelectItem value="365">Last Year</SelectItem>
        </SelectContent>
      </Select>
    </motion.div>
  );
}


================================================================================
FILE PATH: frontend\src\components\progress\RecordItem.tsx
================================================================================


import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Dumbbell } from "lucide-react";

interface RecordItemProps {
  record: {
    id: string;
    name: string;
    date: string;
    value: number;
    unit: string;
  };
  onEdit: (recordId: string) => void;
  onDelete: (recordId: string) => void;
}

export default function RecordItem({
  record,
  onEdit,
  onDelete,
}: RecordItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50, opacity: 0 }}
      whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(0,255,220,0.1)" }}
      className="flex items-center justify-between p-4 rounded-lg bg-card progress-neon focus-outline"
      tabIndex={0}
      aria-label={`${record.name} personal record: ${record.value} ${record.unit} on ${record.date}`}
    >
      <div className="flex items-center gap-3">
        <Dumbbell className="h-5 w-5 text-primary" />
        <div>
          <p className="font-semibold text-foreground">{record.name}</p>
          <p className="text-sm text-muted-foreground">{record.date}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-lg font-bold text-primary">{record.value} {record.unit}</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            onEdit(record.id);
          }}
          aria-label={`Edit ${record.name} record`}
          className="focus-outline"
        >
          <Edit className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(record.id);
          }}
          aria-label={`Delete ${record.name} record`}
          className="focus-outline"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}


================================================================================
FILE PATH: frontend\src\components\progress\RecordsList.tsx
================================================================================


import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import RecordItem from "./RecordItem";
import { Skeleton } from "@/components/ui/skeleton";

interface RecordsListProps {
  records: any[]; // Replace 'any' with actual Record type
  loading: boolean;
  onEdit: (recordId: string) => void;
  onDelete: (recordId: string) => void;
}

export default function RecordsList({
  records,
  loading,
  onEdit,
  onDelete,
}: RecordsListProps) {
  if (loading && records.length === 0) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-20 w-full" />
        ))}
      </div>
    );
  }

  if (records.length === 0 && !loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12 text-muted-foreground"
      >
        <p className="text-lg">No personal records yet. Log a workout to set one!</p>
      </motion.div>
    );
  }

  return (
    <motion.div layout className="space-y-4">
      <AnimatePresence>
        {records.map((record) => (
          <RecordItem
            key={record.id}
            record={record}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}


================================================================================
FILE PATH: frontend\src\components\progress\StatCard.tsx
================================================================================


import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  delta?: {
    value: string | number;
    isPositive: boolean;
  };
}

export default function StatCard({
  icon,
  label,
  value,
  delta,
}: StatCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(0,255,220,0.2)" }}
      className="progress-neon rounded-lg overflow-hidden cursor-pointer focus-outline"
      role="status"
      aria-label={`${label}: ${value}`}
      tabIndex={0}
    >
      <Card className="bg-transparent border-none shadow-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {label}
          </CardTitle>
          {icon}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">{value}</div>
          {delta && (
            <p
              className={`text-xs flex items-center ${delta.isPositive ? "text-green-500" : "text-red-500"}`}
            >
              {delta.isPositive ? (
                <ArrowUp className="h-3 w-3 mr-1" />
              ) : (
                <ArrowDown className="h-3 w-3 mr-1" />
              )}
              {delta.value}
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}


================================================================================
FILE PATH: frontend\src\components\ProtectedRoute.tsx
================================================================================

import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const token = localStorage.getItem("token");
  if (!token) return null;

  return <>{children}</>;
};

export default ProtectedRoute;


================================================================================
FILE PATH: frontend\src\components\Sidebar.tsx
================================================================================

import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Dumbbell,
  Utensils,
  Heart,
  TrendingUp,
  User,
  LogOut,
  Activity,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const Sidebar = () => {
  const location = useLocation();
  const { user } = useCurrentUser();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: Home },
    { path: "/workouts", label: "Workouts", icon: Dumbbell },
    { path: "/nutrition", label: "Nutrition", icon: Utensils },
    { path: "/mood", label: "Mood & Energy", icon: Heart },
    { path: "/progress", label: "Progress", icon: TrendingUp },
    { path: "/profile", label: "Profile", icon: User },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-[100]">
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:bg-white/10">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Sidebar for Desktop */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-background/80 backdrop-blur-xl border-r border-white/5 flex-col z-[50]">
        {/* Logo */}
        <div className="p-8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-neon">
            <Activity className="w-6 h-6 text-black" />
          </div>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 tracking-tight">EchoBody</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative group block"
              >
                <div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 relative z-10 ${isActive
                  ? "text-primary-foreground font-semibold"
                  : "text-muted-foreground hover:text-white"
                  }`}>
                  <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`} />
                  <span className="font-medium">{item.label}</span>
                </div>

                {/* Active/Hover Background */}
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 bg-primary/20 rounded-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full shadow-[0_0_10px_theme(colors.primary.DEFAULT)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-white/5 bg-black/20">
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="border-2 border-primary/30 ring-2 ring-primary/10">
              <AvatarFallback className="bg-primary/20 text-primary font-bold">
                {user?.name?.charAt(0) || "U"}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">
                {user?.name || "User"}
              </p>
              <p className="text-xs text-muted-foreground">Premium Member</p>
            </div>
          </div>
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="w-full justify-start gap-2 text-muted-foreground hover:text-white hover:bg-red-500/10 hover:text-red-400 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Sidebar for Mobile (Drawer) */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="lg:hidden fixed left-0 top-0 h-screen w-72 bg-background border-r border-white/10 flex flex-col z-[90]"
          >
            {/* Logo */}
            <div className="p-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-neon">
                <Activity className="w-6 h-6 text-black" />
              </div>
              <h1 className="text-2xl font-bold text-white tracking-tight">EchoBody</h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive
                      ? "bg-primary/20 text-primary border border-primary/20"
                      : "text-muted-foreground hover:bg-white/5 hover:text-white"
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* User Section */}
            <div className="p-4 border-t border-white/5 bg-black/20">
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="border border-white/10">
                  <AvatarFallback className="bg-primary/20 text-primary">
                    {user?.name?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    {user?.name || "User"}
                  </p>
                </div>
              </div>
              <Button
                onClick={handleLogout}
                variant="ghost"
                className="w-full justify-start gap-2 text-muted-foreground hover:text-white"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Overlay for mobile sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-[80]"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;


================================================================================
FILE PATH: frontend\src\components\ui\accordion.tsx
================================================================================

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };


================================================================================
FILE PATH: frontend\src\components\ui\alert.tsx
================================================================================

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props} />
  ),
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
  ),
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };


================================================================================
FILE PATH: frontend\src\components\ui\alert-dialog.tsx
================================================================================

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className,
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};


================================================================================
FILE PATH: frontend\src\components\ui\aspect-ratio.tsx
================================================================================

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

const AspectRatio = AspectRatioPrimitive.Root;

export { AspectRatio };


================================================================================
FILE PATH: frontend\src\components\ui\avatar.tsx
================================================================================

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image ref={ref} className={cn("aspect-square h-full w-full", className)} {...props} />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };


================================================================================
FILE PATH: frontend\src\components\ui\badge.tsx
================================================================================

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };


================================================================================
FILE PATH: frontend\src\components\ui\breadcrumb.tsx
================================================================================

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className,
      )}
      {...props}
    />
  ),
);
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props} />
  ),
);
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return <Comp ref={ref} className={cn("transition-colors hover:text-foreground", className)} {...props} />;
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  ),
);
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<"li">) => (
  <li role="presentation" aria-hidden="true" className={cn("[&>svg]:size-3.5", className)} {...props}>
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};


================================================================================
FILE PATH: frontend\src\components\ui\button.tsx
================================================================================

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };


================================================================================
FILE PATH: frontend\src\components\ui\calendar.tsx
================================================================================

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(buttonVariants({ variant: "ghost" }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };


================================================================================
FILE PATH: frontend\src\components\ui\card.tsx
================================================================================

import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };


================================================================================
FILE PATH: frontend\src\components\ui\carousel.tsx
================================================================================

import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
  ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)}
          {...props}
        />
      </div>
    );
  },
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)}
        {...props}
      />
    );
  },
);
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-left-12 top-1/2 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  },
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-right-12 top-1/2 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  },
);
CarouselNext.displayName = "CarouselNext";

export { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };


================================================================================
FILE PATH: frontend\src\components\ui\chart.tsx
================================================================================

import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & ({ color?: string; theme?: never } | { color?: never; theme: Record<keyof typeof THEMES, string> });
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([_, config]) => config.theme || config.color);

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref,
  ) => {
    const { config } = useChart();

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }

      const [item] = payload;
      const key = `${labelKey || item.dataKey || item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label;

      if (labelFormatter) {
        return <div className={cn("font-medium", labelClassName)}>{labelFormatter(value, payload)}</div>;
      }

      if (!value) {
        return null;
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

    if (!active || !payload?.length) {
      return null;
    }

    const nestLabel = payload.length === 1 && indicator !== "dot";

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className,
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center",
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                            "h-2.5 w-2.5": indicator === "dot",
                            "w-1": indicator === "line",
                            "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                            "my-0.5": nestLabel && indicator === "dashed",
                          })}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center",
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">{itemConfig?.label || item.name}</span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);
ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean;
      nameKey?: string;
    }
>(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className)}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <div
            key={item.value}
            className={cn("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground")}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegend";

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  const payloadPayload =
    "payload" in payload && typeof payload.payload === "object" && payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (key in payload && typeof payload[key as keyof typeof payload] === "string") {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key as keyof typeof config];
}

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle };


================================================================================
FILE PATH: frontend\src\components\ui\checkbox.tsx
================================================================================

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };


================================================================================
FILE PATH: frontend\src\components\ui\collapsible.tsx
================================================================================

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };


================================================================================
FILE PATH: frontend\src\components\ui\command.tsx
================================================================================

import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />);

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator ref={ref} className={cn("-mx-1 h-px bg-border", className)} {...props} />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />;
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};


================================================================================
FILE PATH: frontend\src\components\ui\context-menu.tsx
================================================================================

import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold text-foreground", inset && "pl-8", className)}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-border", className)} {...props} />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />;
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};


================================================================================
FILE PATH: frontend\src\components\ui\dialog.tsx
================================================================================

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};


================================================================================
FILE PATH: frontend\src\components\ui\drawer.tsx
================================================================================

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

const Drawer = ({ shouldScaleBackground = true, ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay ref={ref} className={cn("fixed inset-0 z-50 bg-black/80", className)} {...props} />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className,
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};


================================================================================
FILE PATH: frontend\src\components\ui\dropdown-menu.tsx
================================================================================

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />;
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};


================================================================================
FILE PATH: frontend\src\components\ui\form.tsx
================================================================================

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import { Controller, ControllerProps, FieldPath, FieldValues, FormProvider, useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props} />
      </FormItemContext.Provider>
    );
  },
);
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return <Label ref={ref} className={cn(error && "text-destructive", className)} htmlFor={formItemId} {...props} />;
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<React.ElementRef<typeof Slot>, React.ComponentPropsWithoutRef<typeof Slot>>(
  ({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

    return (
      <Slot
        ref={ref}
        id={formItemId}
        aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
        aria-invalid={!!error}
        {...props}
      />
    );
  },
);
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();

    return <p ref={ref} id={formDescriptionId} className={cn("text-sm text-muted-foreground", className)} {...props} />;
  },
);
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
      return null;
    }

    return (
      <p ref={ref} id={formMessageId} className={cn("text-sm font-medium text-destructive", className)} {...props}>
        {body}
      </p>
    );
  },
);
FormMessage.displayName = "FormMessage";

export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField };


================================================================================
FILE PATH: frontend\src\components\ui\hover-card.tsx
================================================================================

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };


================================================================================
FILE PATH: frontend\src\components\ui\input.tsx
================================================================================

import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };


================================================================================
FILE PATH: frontend\src\components\ui\input-otp.tsx
================================================================================

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";

import { cn } from "@/lib/utils";

const InputOTP = React.forwardRef<React.ElementRef<typeof OTPInput>, React.ComponentPropsWithoutRef<typeof OTPInput>>(
  ({ className, containerClassName, ...props }, ref) => (
    <OTPInput
      ref={ref}
      containerClassName={cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName)}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  ),
);
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<React.ElementRef<"div">, React.ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex items-center", className)} {...props} />,
);
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = React.forwardRef<React.ElementRef<"div">, React.ComponentPropsWithoutRef<"div">>(
  ({ ...props }, ref) => (
    <div ref={ref} role="separator" {...props}>
      <Dot />
    </div>
  ),
);
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };


================================================================================
FILE PATH: frontend\src\components\ui\label.tsx
================================================================================

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };


================================================================================
FILE PATH: frontend\src\components\ui\menubar.tsx
================================================================================

import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const MenubarMenu = MenubarPrimitive.Menu;

const MenubarGroup = MenubarPrimitive.Group;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarSub = MenubarPrimitive.Sub;

const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn("flex h-10 items-center space-x-1 rounded-md border bg-background p-1", className)}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </MenubarPrimitive.Portal>
));
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />;
};
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};


================================================================================
FILE PATH: frontend\src\components\ui\navigation-menu.tsx
================================================================================

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className,
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};


================================================================================
FILE PATH: frontend\src\components\ui\pagination.tsx
================================================================================

import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />
  ),
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({ className, isActive, size = "icon", ...props }: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to previous page" size="default" className={cn("gap-1 pl-2.5", className)} {...props}>
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to next page" size="default" className={cn("gap-1 pr-2.5", className)} {...props}>
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span aria-hidden className={cn("flex h-9 w-9 items-center justify-center", className)} {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};


================================================================================
FILE PATH: frontend\src\components\ui\popover.tsx
================================================================================

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };


================================================================================
FILE PATH: frontend\src\components\ui\progress.tsx
================================================================================

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };


================================================================================
FILE PATH: frontend\src\components\ui\radio-group.tsx
================================================================================

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };


================================================================================
FILE PATH: frontend\src\components\ui\resizable.tsx
================================================================================

import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";

import { cn } from "@/lib/utils";

const ResizablePanelGroup = ({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
    {...props}
  />
);

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };


================================================================================
FILE PATH: frontend\src\components\ui\scroll-area.tsx
================================================================================

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root ref={ref} className={cn("relative overflow-hidden", className)} {...props}>
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">{children}</ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };


================================================================================
FILE PATH: frontend\src\components\ui\select.tsx
================================================================================

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label ref={ref} className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)} {...props} />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};


================================================================================
FILE PATH: frontend\src\components\ui\separator.tsx
================================================================================

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className)}
    {...props}
  />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };


================================================================================
FILE PATH: frontend\src\components\ui\sheet.tsx
================================================================================

import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
  ({ side = "right", className, children, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
        {children}
        <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  ),
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title ref={ref} className={cn("text-lg font-semibold text-foreground", className)} {...props} />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};


================================================================================
FILE PATH: frontend\src\components\ui\sidebar.tsx
================================================================================

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { PanelLeft } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContext = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContext | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
>(({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }, ref) => {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open],
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed";

  const contextValue = React.useMemo<SidebarContext>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
});
SidebarProvider.displayName = "SidebarProvider";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
  }
>(({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div
        className={cn("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-mobile="true"
          className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      ref={ref}
      className="group peer hidden text-sidebar-foreground md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        className={cn(
          "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]",
        )}
      />
      <div
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className,
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
        >
          {children}
        </div>
      </div>
    </div>
  );
});
Sidebar.displayName = "Sidebar";

const SidebarTrigger = React.forwardRef<React.ElementRef<typeof Button>, React.ComponentProps<typeof Button>>(
  ({ className, onClick, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <Button
        ref={ref}
        data-sidebar="trigger"
        variant="ghost"
        size="icon"
        className={cn("h-7 w-7", className)}
        onClick={(event) => {
          onClick?.(event);
          toggleSidebar();
        }}
        {...props}
      >
        <PanelLeft />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
    );
  },
);
SidebarTrigger.displayName = "SidebarTrigger";

const SidebarRail = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(
  ({ className, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <button
        ref={ref}
        data-sidebar="rail"
        aria-label="Toggle Sidebar"
        tabIndex={-1}
        onClick={toggleSidebar}
        title="Toggle Sidebar"
        className={cn(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 hover:after:bg-sidebar-border sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarRail.displayName = "SidebarRail";

const SidebarInset = React.forwardRef<HTMLDivElement, React.ComponentProps<"main">>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className,
      )}
      {...props}
    />
  );
});
SidebarInset.displayName = "SidebarInset";

const SidebarInput = React.forwardRef<React.ElementRef<typeof Input>, React.ComponentProps<typeof Input>>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        data-sidebar="input"
        className={cn(
          "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarInput.displayName = "SidebarInput";

const SidebarHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return <div ref={ref} data-sidebar="header" className={cn("flex flex-col gap-2 p-2", className)} {...props} />;
});
SidebarHeader.displayName = "SidebarHeader";

const SidebarFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return <div ref={ref} data-sidebar="footer" className={cn("flex flex-col gap-2 p-2", className)} {...props} />;
});
SidebarFooter.displayName = "SidebarFooter";

const SidebarSeparator = React.forwardRef<React.ElementRef<typeof Separator>, React.ComponentProps<typeof Separator>>(
  ({ className, ...props }, ref) => {
    return (
      <Separator
        ref={ref}
        data-sidebar="separator"
        className={cn("mx-2 w-auto bg-sidebar-border", className)}
        {...props}
      />
    );
  },
);
SidebarSeparator.displayName = "SidebarSeparator";

const SidebarContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarContent.displayName = "SidebarContent";

const SidebarGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  );
});
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupLabel = React.forwardRef<HTMLDivElement, React.ComponentProps<"div"> & { asChild?: boolean }>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        data-sidebar="group-label"
        className={cn(
          "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarGroupLabel.displayName = "SidebarGroupLabel";

const SidebarGroupAction = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button"> & { asChild?: boolean }>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        data-sidebar="group-action"
        className={cn(
          "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 after:md:hidden",
          "group-data-[collapsible=icon]:hidden",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarGroupAction.displayName = "SidebarGroupAction";

const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div ref={ref} data-sidebar="group-content" className={cn("w-full text-sm", className)} {...props} />
  ),
);
SidebarGroupContent.displayName = "SidebarGroupContent";

const SidebarMenu = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(({ className, ...props }, ref) => (
  <ul ref={ref} data-sidebar="menu" className={cn("flex w-full min-w-0 flex-col gap-1", className)} {...props} />
));
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...props }, ref) => (
  <li ref={ref} data-sidebar="menu-item" className={cn("group/menu-item relative", className)} {...props} />
));
SidebarMenuItem.displayName = "SidebarMenuItem";

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      ref={ref}
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent side="right" align="center" hidden={state !== "collapsed" || isMobile} {...tooltip} />
    </Tooltip>
  );
});
SidebarMenuButton.displayName = "SidebarMenuButton";

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";

const SidebarMenuBadge = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="menu-badge"
      className={cn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuBadge.displayName = "SidebarMenuBadge";

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean;
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />}
      <Skeleton
        className="h-4 max-w-[--skeleton-width] flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

const SidebarMenuSub = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-sidebar="menu-sub"
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuSub.displayName = "SidebarMenuSub";

const SidebarMenuSubItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ ...props }, ref) => (
  <li ref={ref} {...props} />
));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};


================================================================================
FILE PATH: frontend\src\components\ui\skeleton.tsx
================================================================================

import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />;
}

export { Skeleton };


================================================================================
FILE PATH: frontend\src\components\ui\slider.tsx
================================================================================

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };


================================================================================
FILE PATH: frontend\src\components\ui\sonner.tsx
================================================================================

import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };


================================================================================
FILE PATH: frontend\src\components\ui\switch.tsx
================================================================================

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };


================================================================================
FILE PATH: frontend\src\components\ui\table.tsx
================================================================================

import * as React from "react";

import { cn } from "@/lib/utils";

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
  ),
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />,
);
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
  ),
);
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tfoot ref={ref} className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)} {...props} />
  ),
);
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50", className)}
      {...props}
    />
  ),
);
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    />
  ),
);
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)} {...props} />
  ),
);
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
  ({ className, ...props }, ref) => (
    <caption ref={ref} className={cn("mt-4 text-sm text-muted-foreground", className)} {...props} />
  ),
);
TableCaption.displayName = "TableCaption";

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };


================================================================================
FILE PATH: frontend\src\components\ui\tabs.tsx
================================================================================

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };


================================================================================
FILE PATH: frontend\src\components\ui\textarea.tsx
================================================================================

import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };


================================================================================
FILE PATH: frontend\src\components\ui\toast.tsx
================================================================================

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return <ToastPrimitives.Root ref={ref} className={cn(toastVariants({ variant }), className)} {...props} />;
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title ref={ref} className={cn("text-sm font-semibold", className)} {...props} />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description ref={ref} className={cn("text-sm opacity-90", className)} {...props} />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};


================================================================================
FILE PATH: frontend\src\components\ui\toaster.tsx
================================================================================

import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}


================================================================================
FILE PATH: frontend\src\components\ui\toggle.tsx
================================================================================

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, size, className }))} {...props} />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };


================================================================================
FILE PATH: frontend\src\components\ui\toggle-group.tsx
================================================================================

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root ref={ref} className={cn("flex items-center justify-center gap-1", className)} {...props}>
    <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };


================================================================================
FILE PATH: frontend\src\components\ui\tooltip.tsx
================================================================================

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };


================================================================================
FILE PATH: frontend\src\components\ui\use-toast.ts
================================================================================

import { useToast, toast } from "@/hooks/use-toast";

export { useToast, toast };


================================================================================
FILE PATH: frontend\src\components\workouts\WorkoutCard.tsx
================================================================================


import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Calendar, Dumbbell, Flame } from "lucide-react";

import { Workout } from "@/services/workoutService";

interface WorkoutCardProps {
  workout: Workout;
  onSelect: (workoutId: string) => void;
  onEdit: (workoutId: string) => void;
  onDelete: (workoutId: string) => void;
}

export default function WorkoutCard({
  workout,
  onSelect,
  onEdit,
  onDelete,
}: WorkoutCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01, boxShadow: "0 10px 20px rgba(0,255,220,0.1)" }}
      className="workout-neon rounded-xl overflow-hidden cursor-pointer focus-outline"
      onClick={() => workout.id && onSelect(workout.id)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${workout.name} on ${workout.date || 'unknown date'}`}
    >
      <Card className="bg-transparent border-none shadow-none">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Dumbbell className="h-5 w-5 text-primary" /> {workout.name}
          </CardTitle>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <Calendar className="h-4 w-4" /> {workout.date || 'No Date'}
          </p>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <p>Muscle Group: <span className="text-foreground font-medium">{workout.muscleGroup}</span></p>
          <p>Sets x Reps: <span className="text-foreground font-medium">{workout.sets} x {workout.reps}</span></p>
          <p>Weight: <span className="text-foreground font-medium">{workout.weight} kg</span></p>
          <p className="flex items-center gap-1">
            <Flame className="h-4 w-4 text-orange-400" /> Calories Burned: <span className="text-foreground font-medium">{workout.caloriesBurned || 0}</span>
          </p>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              if (workout.id) onEdit(workout.id);
            }}
            aria-label={`Edit ${workout.name}`}
            className="focus-outline"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              if (workout.id) onDelete(workout.id);
            }}
            aria-label={`Delete ${workout.name}`}
            className="focus-outline"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}


================================================================================
FILE PATH: frontend\src\components\workouts\WorkoutChart.tsx
================================================================================

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Workout } from "@/services/workoutService";

interface WorkoutChartProps {
  workouts: Workout[];
}

export default function WorkoutChart({ workouts }: WorkoutChartProps) {
  if (!workouts || workouts.length === 0) return null;

  // Process data for the chart - calculate volume per day
  const data = workouts.map(workout => {
    let dateStr = "N/A";
    if (workout.date) {
      const d = new Date(workout.date);
      if (!isNaN(d.getTime())) {
        dateStr = d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
      }
    }
    return {
      date: dateStr,
      volume: (workout.sets || 0) * (workout.reps || 0) * (workout.weight || 0),
      calories: workout.caloriesBurned || 0,
    };
  }).slice(-7); // Last 7 workouts

  return (
    <Card className="glass-card mb-8">
      <CardHeader>
        <CardTitle className="text-white">Training Volume (Last 7 Sessions)</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
            <XAxis dataKey="date" stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
            <Tooltip
              contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
              itemStyle={{ color: '#2dd4bf' }}
            />
            <Area type="monotone" dataKey="volume" stroke="#2dd4bf" strokeWidth={2} fillOpacity={1} fill="url(#colorVolume)" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}


================================================================================
FILE PATH: frontend\src\components\workouts\WorkoutDetailModal.tsx
================================================================================


import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Dumbbell, Flame, Weight, Repeat, Edit, X } from "lucide-react";

interface WorkoutDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  workout: {
    id: string;
    date: string;
    name: string;
    muscleGroup: string;
    sets: number;
    reps: number;
    weight: number;
    caloriesBurned: number;
    notes?: string;
  } | null;
  onEdit: (workoutId: string) => void;
}

export default function WorkoutDetailModal({
  isOpen,
  onClose,
  workout,
  onEdit,
}: WorkoutDetailModalProps) {
  if (!workout) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent
            className="sm:max-w-[425px] p-0 overflow-hidden card-glass border-none"
            onEscapeKeyDown={onClose}
            onPointerDownOutside={onClose}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <DialogHeader className="relative pb-4">
                <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Dumbbell className="h-6 w-6 text-primary" /> {workout.name}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {workout.date}
                </DialogDescription>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 rounded-full focus-outline"
                  onClick={onClose}
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </Button>
              </DialogHeader>

              <div className="grid gap-4 py-4">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Muscle Group:</span>
                  <span className="font-semibold text-foreground">{workout.muscleGroup}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Repeat className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Sets x Reps:</span>
                  <span className="font-semibold text-foreground">{workout.sets} x {workout.reps}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Weight className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Weight:</span>
                  <span className="font-semibold text-foreground">{workout.weight} kg</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="h-4 w-4 text-orange-400" />
                  <span className="text-muted-foreground">Calories Burned:</span>
                  <span className="font-semibold text-foreground">{workout.caloriesBurned}</span>
                </div>
                {workout.notes && (
                  <div>
                    <h4 className="font-semibold text-foreground mt-2">Notes:</h4>
                    <p className="text-muted-foreground text-sm">{workout.notes}</p>
                  </div>
                )}
              </div>

              <div className="flex justify-end pt-4 border-t border-border mt-4">
                <Button onClick={() => onEdit(workout.id)} className="focus-outline">
                  <Edit className="mr-2 h-4 w-4" /> Edit Workout
                </Button>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}


================================================================================
FILE PATH: frontend\src\components\workouts\WorkoutFormModal.tsx
================================================================================


import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { workoutService } from "@/services/workoutService";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const formSchema = z.object({
    date: z.string().optional(),
    name: z.string().min(2, "Name must be at least 2 characters."),
    muscleGroup: z.string().min(2, "Muscle group is required."),
    sets: z.coerce.number().min(1, "Sets must be at least 1"),
    reps: z.coerce.number().min(1, "Reps must be at least 1"),
    weight: z.coerce.number().min(0, "Weight cannot be negative"),
    caloriesBurned: z.coerce.number().min(0).optional(),
    notes: z.string().optional(),
});

interface Workout {
    id?: string;
    date?: string;
    name: string;
    muscleGroup: string;
    sets: number;
    reps: number;
    weight: number;
    caloriesBurned?: number;
    notes?: string;
}

interface WorkoutFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialData?: Workout | null;
}

export default function WorkoutFormModal({ isOpen, onClose, initialData }: WorkoutFormModalProps) {
    const queryClient = useQueryClient();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            date: new Date().toISOString().split('T')[0],
            name: "",
            muscleGroup: "",
            sets: 3,
            reps: 10,
            weight: 0,
            caloriesBurned: 0,
            notes: "",
        },
    });

    React.useEffect(() => {
        if (initialData) {
            form.reset({
                date: initialData.date ? new Date(initialData.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
                name: initialData.name,
                muscleGroup: initialData.muscleGroup,
                sets: initialData.sets,
                reps: initialData.reps,
                weight: initialData.weight,
                caloriesBurned: initialData.caloriesBurned || 0,
                notes: initialData.notes || "",
            });
        } else {
            form.reset({
                date: new Date().toISOString().split('T')[0],
                name: "",
                muscleGroup: "",
                sets: 3,
                reps: 10,
                weight: 0,
                caloriesBurned: 0,
                notes: "",
            });
        }
    }, [initialData, form, isOpen]);

    const mutation = useMutation({
        mutationFn: (values: z.infer<typeof formSchema>) => {
            // Ensure date is properly formatted with time if needed, OR backend handles LocalDate properly
            // Ideally send ISO string with time, but date picker gives YYYY-MM-DD.
            // Backend expects LocalDateTime. append T00:00:00 or T12:00:00?
            // Let's rely on standard ISO string.
            const fullDate = values.date ? new Date(values.date).toISOString() : new Date().toISOString();

            const payload = { ...values, date: fullDate };

            if (initialData?.id) {
                return workoutService.update(initialData.id, payload as any);
            }
            return workoutService.create(payload as any);
        },
        onSuccess: () => {
            toast.success(initialData ? "Workout updated!" : "Workout logged successfully!");
            queryClient.invalidateQueries({ queryKey: ['workouts'] });
            queryClient.invalidateQueries({ queryKey: ['dashboardSummary'] });
            form.reset();
            onClose();
        },
        onError: (error) => {
            toast.error(`Failed to log workout: ${error}`);
        }
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        mutation.mutate(values);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] card-glass">
                <DialogHeader>
                    <DialogTitle>{initialData ? "Edit Workout" : "Log Workout"}</DialogTitle>
                    <DialogDescription>
                        {initialData ? "Update your workout details." : "Track your progress by logging your workout details."}
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Date</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Workout Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. Morning Cardio" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="muscleGroup"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Muscle Group</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. Legs, Chest, Cardio" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="grid grid-cols-3 gap-4">
                            <FormField
                                control={form.control}
                                name="sets"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Sets</FormLabel>
                                        <FormControl>
                                            <Input type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="reps"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Reps</FormLabel>
                                        <FormControl>
                                            <Input type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="weight"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Weight (kg)</FormLabel>
                                        <FormControl>
                                            <Input type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="caloriesBurned"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Calories Burned (Est.)</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="notes"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Notes</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="How did it feel?" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end pt-2">
                            <Button type="button" variant="ghost" onClick={onClose} className="mr-2">Cancel</Button>
                            <Button type="submit" disabled={mutation.isPending}>
                                {mutation.isPending ? "Saving..." : (initialData ? "Update Workout" : "Log Workout")}
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}


================================================================================
FILE PATH: frontend\src\components\workouts\WorkoutList.tsx
================================================================================


import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import WorkoutCard from "./WorkoutCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { Workout } from "@/services/workoutService";

interface WorkoutListProps {
  workouts: Workout[];
  onSelect: (workoutId: string) => void;
  onEdit: (workoutId: string) => void;
  onDelete: (workoutId: string) => void;
  loading: boolean;
  onLoadMore: () => void;
  hasMore: boolean;
}

export default function WorkoutList({
  workouts,
  onSelect,
  onEdit,
  onDelete,
  loading,
  onLoadMore,
  hasMore,
}: WorkoutListProps) {
  if (loading && workouts.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-48 w-full" />
        ))}
      </div>
    );
  }

  if (workouts.length === 0 && !loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12 text-muted-foreground"
      >
        <p className="text-lg">No workouts found. Log your first workout!</p>
        {/* Potentially add a button to log new workout */}
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4"
      >
        <AnimatePresence>
          {workouts.map((workout) => (
            <motion.div
              key={workout.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <WorkoutCard
                workout={workout}
                onSelect={onSelect}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {hasMore && (
        <div className="flex justify-center mt-6">
          <Button onClick={onLoadMore} disabled={loading} className="focus-outline">
            {loading ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}
    </div>
  );
}


================================================================================
FILE PATH: frontend\src\components\workouts\WorkoutToolbar.tsx
================================================================================


import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, PlusCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface WorkoutToolbarProps {
  onSearch: (query: string) => void;
  onFilter: (filter: string) => void;
  onNewWorkout: () => void;
}

export default function WorkoutToolbar({
  onSearch,
  onFilter,
  onNewWorkout,
}: WorkoutToolbarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Debounce search input
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery, onSearch]);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8"
    >
      <h1 className="text-3xl font-bold text-foreground">Your Workouts</h1>
      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search workouts..."
            className="pl-10 w-full focus-outline"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search workouts"
          />
        </div>
        <Select onValueChange={onFilter} aria-label="Filter workouts">
          <SelectTrigger className="w-[180px] focus-outline">
            <SelectValue placeholder="Filter by..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="chest">Chest</SelectItem>
            <SelectItem value="back">Back</SelectItem>
            <SelectItem value="legs">Legs</SelectItem>
            <SelectItem value="arms">Arms</SelectItem>
            <SelectItem value="shoulders">Shoulders</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={onNewWorkout} className="focus-outline" aria-label="Log new workout">
          <PlusCircle className="mr-2 h-5 w-5" />
          Log Workout
        </Button>
      </div>
    </motion.div>
  );
}


================================================================================
FILE PATH: frontend\src\hooks\useCurrentUser.ts
================================================================================


import { useState, useEffect } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  height_cm: number;
  weight_kg: number;
  goal: string;
  gender: string;
}

export const useCurrentUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        setError('No token found');
        return;
      }

      try {
        const response = await fetch('/api/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }

        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);  
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error };
};


================================================================================
FILE PATH: frontend\src\hooks\use-mobile.tsx
================================================================================

import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}


================================================================================
FILE PATH: frontend\src\hooks\use-toast.ts
================================================================================

import * as React from "react";

import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: ToasterToast["id"];
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: ToasterToast["id"];
    };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

type Toast = Omit<ToasterToast, "id">;

function toast({ ...props }: Toast) {
  const id = genId();

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

export { useToast, toast };


================================================================================
FILE PATH: frontend\src\index.css
================================================================================

@tailwind base;
@tailwind components;
@tailwind utilities;

/* 
  EchoBody Premium Theme System
  Base: Deep Black / Void
  Accents: Neon Cyan (#00ffe1) & Electric Purple (#bd00ff)
*/

@layer base {
  :root {
    /* DEFAULT DARK MODE (Forced) */
    --background: 240 10% 3.9%; /* #09090b - Zinc 950 (Deep dark, almost black) */
    --foreground: 0 0% 98%;     /* #fafafa */

    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;

    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;

    /* NEON CYAN PRIMARY */
    --primary: 173 100% 50%; /* #00ffe1 */
    --primary-foreground: 240 10% 3.9%;

    /* ELECTRIC PURPLE SECONDARY */
    --secondary: 270 100% 60%; /* #9d00ff */
    --secondary-foreground: 0 0% 98%;

    /* NEON PINK ACCENT */
    --accent: 320 100% 60%; /* #ff00cc */
    --accent-foreground: 0 0% 98%;

    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;

    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 173 100% 50%;

    --radius: 0.75rem;

    /* Custom Glass & Gradient Vars */
    --glass-bg: 240 10% 3.9% / 0.7;
    --glass-border: 240 3.7% 15.9% / 0.5;
    --shadow-neon: 0 0 20px -5px hsl(var(--primary) / 0.3);
  }

  /* Force dark mode styles even without .dark class if needed, or refine .dark */
  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;

    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;

    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;

    --primary: 173 100% 50%;
    --primary-foreground: 240 5.9% 10%;

    --secondary: 270 100% 60%;
    --secondary-foreground: 0 0% 98%;

    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;

    --accent: 320 100% 60%;
    --accent-foreground: 0 0% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;

    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 173 100% 50%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-family: 'Inter', system-ui, sans-serif;
    /* Subtle mesh gradient background */
    background-image: 
      radial-gradient(circle at 50% 0%, hsl(var(--primary) / 0.05) 0%, transparent 60%),
      radial-gradient(circle at 100% 100%, hsl(var(--secondary) / 0.05) 0%, transparent 50%);
    background-attachment: fixed;
  }
}

@layer utilities {
  /* Premium Glass Card */
  .glass-card {
    @apply bg-background/60 backdrop-blur-xl border border-white/10 shadow-lg;
  }
  
  /* Neon Glow Effect */
  .neon-glow {
    box-shadow: 0 0 10px hsl(var(--primary) / 0.5), 0 0 20px hsl(var(--primary) / 0.3);
  }

  .text-glow {
    text-shadow: 0 0 10px hsl(var(--primary) / 0.5);
  }

  /* Scrollbar Polish */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    @apply bg-muted-foreground/30 rounded-full;
  }
  ::-webkit-scrollbar-thumb:hover {
    @apply bg-muted-foreground/50;
  }

  /* Animation Utilities */
  .animate-in-up {
    animation: fade-in-up 0.5s ease-out forwards;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}




================================================================================
FILE PATH: frontend\src\lib\utils.ts
================================================================================

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


================================================================================
FILE PATH: frontend\src\main.tsx
================================================================================

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);


================================================================================
FILE PATH: frontend\src\pages\About.tsx
================================================================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Award, Menu, X } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();
  // ...

  // Inside return

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
  ];

  const slideInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' as const } },
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="animated-bg"></div>
      </div>

      {/* Navbar */}
      <motion.nav
        className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/placeholder.svg" alt="EchoBody Logo" className="h-8 mr-2" />
            <span className="text-2xl font-bold text-foreground">EchoBody</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-muted-foreground hover:text-primary transition-colors duration-300 holographic-underline ${link.name === 'About' ? 'text-primary' : ''
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/login" className="text-muted-foreground hover:text-primary transition-colors duration-300 holographic-underline">
              Login
            </Link>
            <motion.button
              className="relative px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold overflow-hidden group holographic-sheen"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get Started</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-foreground focus:outline-none">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-background bg-opacity-95 z-20 flex flex-col items-center py-4 space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-muted-foreground hover:text-primary transition-colors duration-300 text-lg`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/login" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-lg">
              Login
            </Link>
            <motion.button
              className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold holographic-sheen"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </motion.nav>

      <main className="relative z-10 container mx-auto px-6 text-center py-20">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight text-foreground mb-6 drop-shadow-lg"
          variants={slideInUp}
          initial="hidden"
          animate="visible"
        >
          About EchoBody
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
          variants={slideInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Our mission is to empower your wellness journey with intelligent tracking and personalized insights.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          <motion.div
            className="glass-card rounded-xl p-8 flex flex-col items-center text-center"
            variants={slideInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <Users size={48} className="text-primary mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground">To create a world where everyone has the tools to understand and optimize their health and fitness effortlessly.</p>
          </motion.div>

          <motion.div
            className="glass-card rounded-xl p-8 flex flex-col items-center text-center"
            variants={slideInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <Lightbulb size={48} className="text-secondary mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">Our Technology</h3>
            <p className="text-muted-foreground">Leveraging cutting-edge AI and data visualization to provide actionable insights into your body's unique needs.</p>
          </motion.div>

          <motion.div
            className="glass-card rounded-xl p-8 flex flex-col items-center text-center"
            variants={slideInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            <Award size={48} className="text-accent mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">Our Commitment</h3>
            <p className="text-muted-foreground">Dedicated to privacy, accuracy, and continuous innovation to support your journey to a healthier you.</p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default About;


================================================================================
FILE PATH: frontend\src\pages\Dashboard.tsx
================================================================================

import { motion } from 'framer-motion';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { Skeleton } from '@/components/ui/skeleton';
import { EchoScoreCard } from '@/components/dashboard/EchoScoreCard';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { StatCard } from '@/components/dashboard/StatCard';
import { Dumbbell, Activity, Utensils, BarChart } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function Dashboard() {
  const { user, loading, error } = useCurrentUser();

  if (loading) {
    return (
      <div className="space-y-8">
        <Skeleton className="h-12 w-1/2" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Skeleton className="h-96 md:col-span-2" />
          <Skeleton className="h-64" />
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.h1 variants={itemVariants} className="text-4xl font-bold tracking-tight">
        Welcome back, {user?.name}!
      </motion.h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <EchoScoreCard />
        </motion.div>
        <motion.div variants={itemVariants}>
          <QuickActions />
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4"
      >
        <motion.div variants={itemVariants}>
          <StatCard
            title="Workouts This Week"
            value="3"
            icon={<Dumbbell className="h-6 w-6 text-primary" />}
            color="#3b82f6"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard
            title="Energy Level"
            value="High"
            icon={<Activity className="h-6 w-6 text-primary" />}
            color="#10b981"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard
            title="Calories Today"
            value="1,800"
            icon={<Utensils className="h-6 w-6 text-primary" />}
            color="#f97316"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard
            title="Current Streak"
            value="12 days"
            icon={<BarChart className="h-6 w-6 text-primary" />}
            color="#8b5cf6"
          />
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-4">
        <h2 className="text-2xl font-bold">Your Insights</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-card p-4 shadow-sm">
            <h3 className="font-semibold">New Peak Performance</h3>
            <p className="text-sm text-muted-foreground">You hit a new personal best in your last workout!</p>
          </div>
          <div className="rounded-lg bg-card p-4 shadow-sm">
            <h3 className="font-semibold">Mindful Moment</h3>
            <p className="text-sm text-muted-foreground">You've logged a mood entry for 5 days in a row.</p>
          </div>
          <div className="rounded-lg bg-card p-4 shadow-sm">
            <h3 className="font-semibold">Nutrition Tip</h3>
            <p className="text-sm text-muted-foreground">Consider adding more protein to your next meal.</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}


================================================================================
FILE PATH: frontend\src\pages\DashboardV2.tsx
================================================================================


import React from "react";
import { motion } from "framer-motion";
import AnimatedHero from "../components/dashboard/AnimatedHero";
import StatCard from "../components/dashboard/StatCard";
import QuickActions from "../components/dashboard/QuickActions";
import InsightsFeed from "../components/dashboard/InsightsFeed";
import "../styles/dashboard.css";
import { useCurrentUser } from "../hooks/useCurrentUser";

import { useQuery } from "@tanstack/react-query";
import { dashboardService } from "@/services/dashboardService";

export default function DashboardV2() {
  const { user, loading } = useCurrentUser();

  const { data: summary, isLoading: summaryLoading } = useQuery({
    queryKey: ['dashboardSummary'],
    queryFn: dashboardService.getSummary,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background relative z-10">
      <AnimatedHero name={user?.name} score={82} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-6 mt-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Workouts"
            value={summaryLoading ? "..." : summary?.totalWorkouts?.toString() || "0"}
            accent="from-teal-400 to-purple-600"
            percent={60}
          />
          <StatCard
            title="Meals Logged"
            value={summaryLoading ? "..." : summary?.totalMeals?.toString() || "0"}
            accent="from-green-400 to-teal-300"
            percent={80}
          />
          <StatCard
            title="Cals Consumed"
            value={summaryLoading ? "..." : summary?.totalCaloriesConsumed?.toString() || "0"}
            accent="from-orange-400 to-yellow-500"
            percent={75}
          />
          <StatCard
            title="Cals Burned"
            value={summaryLoading ? "..." : summary?.totalCaloriesBurned?.toString() || "0"}
            accent="from-pink-500 to-rose-500"
            percent={90}
          />
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <InsightsFeed />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>
      </motion.div>
    </div>
  );
}


================================================================================
FILE PATH: frontend\src\pages\HomePage.tsx
================================================================================

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X, Heart, Utensils, Brain, Github, Twitter, Linkedin } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const features = [
  { title: "Track Smarter", description: "AI-powered fitness and nutrition tracking" },
  { title: "Progress Insights", description: "Real-time stats and performance analytics" },
  { title: "Predict & Plan", description: "Intelligent scheduling and recovery planning" },
  { title: "Stay Consistent", description: "Personalized motivation and streak tracking" },
];

const HeroSection: React.FC<{ heroOpacity: number, navbarHeight: number }> = ({ heroOpacity, navbarHeight }) => {
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const taglineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" as const } },
  };

  const timelineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.8, delay: 0.5, ease: "easeOut" as const } },
  };

  const featureNodeVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: -15,
      transition: { duration: 0.6, delay: 0.8 + i * 0.4, ease: [0.22, 1, 0.36, 1] as any },
    }),
  };

  const featureTextVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: 1.2 + i * 0.4, ease: "easeOut" as const },
    }),
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center relative z-10" style={{ opacity: heroOpacity }}>
      <motion.h1
        className="text-7xl md:text-9xl font-extrabold text-foreground"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        EchoBody
      </motion.h1>
      <motion.p
        className="text-2xl md:text-3xl text-muted-foreground mt-4"
        variants={taglineVariants}
        initial="hidden"
        animate="visible"
      >
        your fitness, reflected perfectly.
      </motion.p>
      <div className="absolute bottom-20 w-full max-w-4xl mx-auto">
        <motion.div
          className="h-0.5 bg-primary/30 w-full"
          variants={timelineVariants}
          initial="hidden"
          animate="visible"
        />
        <div className="flex justify-between mt-4">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center relative">
              <motion.div
                className="w-2 h-2 rounded-full bg-primary glow-primary"
                custom={i}
                variants={featureNodeVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.div
                className="mt-4 text-center"
                custom={i}
                variants={featureTextVariants}
                initial="hidden"
                animate="visible"
              >
                <h3 className="font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeaturesInView, setIsFeaturesInView] = useState(false);
  const [heroOpacity, setHeroOpacity] = useState(1);
  const navbarRef = useRef<HTMLElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  const featuresRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Features', href: '#features', ref: featuresRef, inView: isFeaturesInView },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
  ];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const taglineVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 16 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as any, // Custom ease-out with overshoot
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: '0 0 30px hsl(var(--primary) / 0.6)', transition: { duration: 0.3 } },
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeDistance = window.innerHeight * 0.4; // Fade out over 40% of viewport height
      const newOpacity = 1 - Math.min(1, scrollY / fadeDistance);
      setHeroOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFeaturesInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust this value to control when the section is considered 'in view'
      }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, [featuresRef]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden" style={{ paddingTop: navbarHeight }}>
      <HeroSection heroOpacity={heroOpacity} navbarHeight={navbarHeight} />
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="animated-bg"></div>
      </div>

      {/* Navbar */}
      <motion.nav
        ref={navbarRef}
        className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md py-4 transition-opacity duration-600 opacity-100 pointer-events-auto"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/placeholder.svg" alt="EchoBody Logo" className="h-8 mr-2" />
            <span className="text-2xl font-bold text-foreground">EchoBody</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.ref) {
                      e.preventDefault();
                      scrollToSection(link.ref);
                    }
                  }}
                  className={`text-muted-foreground hover:text-primary transition-colors duration-300 holographic-underline ${link.inView ? 'text-primary' : ''}`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-muted-foreground hover:text-primary transition-colors duration-300 holographic-underline ${link.inView ? 'text-primary' : ''}`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link to="/login" className="text-muted-foreground hover:text-primary transition-colors duration-300 holographic-underline">
              Login
            </Link>
            <motion.button
              className="relative px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold overflow-hidden group holographic-sheen"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/register')}
            >
              <span className="relative z-10">Get Started</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-foreground focus:outline-none">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-background bg-opacity-95 z-20 flex flex-col items-center py-4 space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.ref) {
                      e.preventDefault();
                      scrollToSection(link.ref);
                    }
                  }}
                  className={`text-muted-foreground hover:text-primary transition-colors duration-300 text-lg ${link.inView ? 'text-primary' : ''}`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-muted-foreground hover:text-primary transition-colors duration-300 text-lg ${link.inView ? 'text-primary' : ''}`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link to="/login" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-lg">
              Login
            </Link>
            <motion.button
              className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold holographic-sheen"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative z-10 w-full py-20 md:py-32 text-center overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold leading-tight text-foreground mb-4 hero-tagline"
            variants={taglineVariants}
            initial="hidden"
            animate="visible"
          >
            your fitness, reflected perfectly.
          </motion.h1>
          <div className="hero-reflection"></div>
        </div>

        {/* 3D Abstract Digital Fitness Graphics Placeholder */}
        <div className="relative w-full max-w-6xl mx-auto mt-16 md:mt-24 h-64 md:h-96 flex items-center justify-center">
          {/* Layer 1: Base glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background rounded-3xl filter blur-2xl opacity-50 animate-pulse-slow"></div>
          {/* Layer 2: Glassmorphism card */}
          <div className="glass-card absolute inset-4 rounded-3xl flex items-center justify-center overflow-hidden">
            <p className="relative z-10 text-muted-foreground text-lg font-semibold">Futuristic Data Visualization (Placeholder)</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="relative z-10 w-full py-20 md:py-24 text-center">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-12"
            variants={taglineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Powerful Health Tracking, Simplified.
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Heart, title: 'Workout Insights', description: 'Analyze your performance, track progress, and optimize your training routines.' },
              { icon: Utensils, title: 'Nutrition Analytics', description: 'Log meals, monitor macros, and gain insights into your dietary habits.' },
              { icon: Brain, title: 'Smart Echo Score', description: 'A comprehensive wellness index that adapts to your unique health journey.' },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                className="glass-card relative rounded-xl p-8 flex flex-col items-center text-center group overflow-hidden"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={`relative z-10 p-4 rounded-full bg-primary mb-6 border border-border`}>
                  <feature.icon size={36} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="relative z-10 w-full py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              className="w-full md:w-1/2 text-center md:text-left"
              variants={taglineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Your body’s progress, visualized.</h2>
              <p className="text-lg text-muted-foreground mb-8">
                See your fitness journey unfold with intuitive charts, detailed reports, and a clear overview of your Echo Score.
              </p>
              <motion.button
                className="relative px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto md:mx-0 overflow-hidden group holographic-sheen"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/about')}
              >
                <span className="relative z-10">Learn More</span>
              </motion.button>
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 relative"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: [0, 5, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Dashboard Mockup Placeholder */}
              <div className="glass-card relative w-full h-64 md:h-96 rounded-xl p-4 flex items-center justify-center shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full object-cover rounded-xl">
                  <rect width="800" height="600" rx="12" fill="hsl(var(--background))" />
                  <rect x="20" y="20" width="760" height="560" rx="8" fill="hsl(var(--card))" />
                  <path d="M50 400 L150 300 L250 350 L350 250 L450 300 L550 200 L650 280 L750 220" stroke="hsl(var(--primary))" strokeWidth="8" strokeLinecap="round" />
                  <circle cx="50" cy="400" r="15" fill="hsl(var(--primary))" />
                  <circle cx="150" cy="300" r="15" fill="hsl(var(--primary))" />
                  <circle cx="250" cy="350" r="15" fill="hsl(var(--primary))" />
                  <circle cx="350" cy="250" r="15" fill="hsl(var(--primary))" />
                  <circle cx="450" cy="300" r="15" fill="hsl(var(--primary))" />
                  <circle cx="550" cy="200" r="15" fill="hsl(var(--primary))" />
                  <circle cx="650" cy="280" r="15" fill="hsl(var(--primary))" />
                  <circle cx="750" cy="220" r="15" fill="hsl(var(--primary))" />
                  <text x="400" y="500" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="40" fontFamily="sans-serif">Fitness Dashboard</text>
                  <text x="400" y="540" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="24" fontFamily="sans-serif">Progress at a Glance</text>
                </svg>
                <div className="absolute inset-0 rounded-xl pointer-events-none" style={{
                  background: 'radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1), transparent 70%)',
                  animation: 'pulse-glow 4s infinite alternate'
                }}></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 w-full py-20 md:py-24 text-center">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-8"
            variants={taglineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Ready to transform your fitness journey?
          </motion.h2>
          <motion.button
            className="relative px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center mx-auto overflow-hidden group holographic-sheen"
            variants={taglineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/register')}
          >
            <span className="relative z-10">Join Now</span>
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="relative z-10 w-full bg-card/50 pt-12 pb-8 px-6"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">EchoBody</h3>
            <p className="text-muted-foreground">Your intelligent fitness and wellness companion.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors duration-300">Features</a></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors duration-300">Pricing</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors duration-300">About Us</Link></li>
            </ul>

          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Legal & Contact</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">Contact</a></li>
            </ul>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300"><Github size={24} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300"><Twitter size={24} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-muted-foreground mt-12">
          &copy; {new Date().getFullYear()} EchoBody. All rights reserved.
        </div>
      </motion.footer>

      {/* Custom CSS for animations and glowing effects */}
      <style>{`
        .animated-bg {
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          left: 0;
          background: radial-gradient(ellipse at 50% 50%, hsl(var(--primary) / 0.1), transparent 70%),
                        radial-gradient(ellipse at 20% 80%, hsl(var(--secondary) / 0.1), transparent 70%),
                        radial-gradient(ellipse at 80% 80%, hsl(var(--accent) / 0.1), transparent 70%);
          animation: drift 40s ease infinite;
        }

        @keyframes drift {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(20px, -20px) rotate(20deg);
          }
          50% {
            transform: translate(0, 0) rotate(0deg);
          }
          75% {
            transform: translate(-20px, 20px) rotate(-20deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animated-bg,
          .hero-tagline {
            animation: none;
          }
        }

        .hero-tagline {
          animation: tagline-glow 3s 1s ease-out forwards;
        }

        .hero-reflection {
          height: 5rem;
          margin-top: 2rem;
          background: linear-gradient(to bottom, hsl(var(--primary) / 0.01), transparent 70%);
          -webkit-mask-image: linear-gradient(to bottom, white 0%, transparent 100%);
          mask-image: linear-gradient(to bottom, white 0%, transparent 100%);
        }

        @keyframes tagline-glow {
          0% {
            text-shadow: 0 0 8px hsl(var(--primary) / 0.2);
          }
          50% {
            text-shadow: 0 0 25px hsl(var(--primary) / 0.4), 0 0 40px hsl(var(--primary) / 0.2);
          }
          100% {
            text-shadow: 0 0 8px hsl(var(--primary) / 0.2);
          }
        }

        .holographic-underline {
          position: relative;
        }

        .holographic-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 1px;
          background: linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)));
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease-out;
        }

        .holographic-underline:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .timeline-line {
          height: 1px;
          background: linear-gradient(to right, hsl(var(--primary) / 0.5), hsl(var(--secondary) / 0.5), hsl(var(--accent) / 0.5));
          box-shadow: 0 0 10px hsl(var(--primary) / 0.5);
        }

        .feature-card {
          backdrop-filter: blur(10px);
          border: 1px solid hsl(var(--border) / 0.2);
          background: hsl(var(--card) / 0.5);
        }

        .feature-card-node {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: hsl(var(--primary));
          box-shadow: 0 0 10px hsl(var(--primary));
        }

        @keyframes pulse-slow {
          0% {
            opacity: 0.5;
            transform: scale(1.02);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
          100% {
            opacity: 0.5;
            transform: scale(1.02);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s infinite ease-in-out;
        }

        /* Group hover effect for feature cards */
        .group:hover [data-group-hover-class="opacity-100"] {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default HomePage;

================================================================================
FILE PATH: frontend\src\pages\Index.tsx
================================================================================

// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to Your Blank App</h1>
        <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
      </div>
    </div>
  );
};

export default Index;


================================================================================
FILE PATH: frontend\src\pages\Login.tsx
================================================================================

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "lucide-react";
import { toast } from "sonner";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        const user = { id: data.userId, name: data.name, email: data.email };
        localStorage.setItem("user", JSON.stringify(user));
        toast.success("Login successful!");
        navigate("/dashboard");
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Invalid credentials. Please try again.");
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="stripe-bg"></div>
      </div>

      <Card className="w-full max-w-md glass-card relative z-10">
        <CardHeader className="space-y-4 text-center">
          <Link to="/" className="mx-auto w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
            <Activity className="w-10 h-10 text-primary-foreground" />
          </Link>
          <div>
            <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
            <CardDescription className="text-base text-muted-foreground mt-2">
              Sign in to continue to EchoBody
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-muted-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-11 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-muted-foreground">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-11 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
              />
            </div>
            <Button
              type="submit"
              className="w-full h-11 bg-primary text-primary-foreground font-medium holographic-sheen"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Login"}
            </Button>
          </form>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
      <style jsx>{`
        .stripe-bg {
          display: none;
        }

        @keyframes sweep {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .stripe-bg {
            animation: none;
            background: linear-gradient(
              -45deg,
              transparent 30%,
              hsl(var(--primary) / 0.1) 45%,
              hsl(var(--secondary) / 0.1) 55%,
              transparent 70%
            );
          }
        }
      `}</style>
    </div>
  );
};




================================================================================
FILE PATH: frontend\src\pages\LoginV2.tsx
================================================================================


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Activity } from "lucide-react";

export function LoginV2() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Welcome back!", {
        description: "Login successful.",
      });
      navigate("/dashboard");
    } catch (error: any) {
      toast.error("Login Failed", {
        description: error.message || "Please check your credentials.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="glass-card rounded-2xl p-1 overflow-hidden">
          <Card className="bg-transparent border-none shadow-none text-foreground">
            <CardHeader className="text-center space-y-4 pb-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto shadow-neon"
              >
                <Activity className="w-8 h-8 text-black" />
              </motion.div>
              <div className="space-y-1">
                <CardTitle className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">
                  Welcome Back
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  Sign in to continue your journey
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-black/20 border-white/10 focus:border-primary focus:ring-primary/20 h-11 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link to="#" className="text-xs text-primary hover:text-primary/80 transition-colors">
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-black/20 border-white/10 focus:border-primary focus:ring-primary/20 h-11 transition-all"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full h-11 bg-primary text-black font-bold text-lg hover:bg-primary/90 hover:scale-[1.02] transition-all shadow-neon"
                  disabled={loading}
                >
                  {loading ? "Signing In..." : "Sign In"}
                </Button>
              </form>
              <div className="mt-8 text-center text-sm">
                <p className="text-muted-foreground">
                  Don't have an account?{" "}
                  <Link to="/register" className="font-semibold text-primary hover:text-primary/80 hover:underline transition-colors">
                    Create free account
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}


================================================================================
FILE PATH: frontend\src\pages\Mood.tsx
================================================================================

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Trash2, Calendar, Battery, MessageSquare } from "lucide-react";
import Layout from "@/components/Layout";
import { toast } from "sonner";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { moodService, MoodEntry } from "@/services/moodService";
import MoodChart from "@/components/mood/MoodChart";
import { motion, AnimatePresence } from "framer-motion";

const Mood = () => {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [energy, setEnergy] = useState([5]);
  const [notes, setNotes] = useState("");

  const { data: history = [], isLoading } = useQuery({
    queryKey: ['moods'],
    queryFn: moodService.getAll,
  });

  const createMutation = useMutation({
    mutationFn: moodService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['moods'] });
      toast.success("Mood logged successfully!");
      setOpen(false);
      // Reset form
      setSelectedMood(null);
      setEnergy([5]);
      setNotes("");
    },
    onError: () => toast.error("Failed to log mood"),
  });

  const deleteMutation = useMutation({
    mutationFn: moodService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['moods'] });
      toast.success("Entry deleted");
    },
    onError: () => toast.error("Failed to delete entry"),
  });

  const moods = [
    { emoji: "😊", label: "Great", value: "Great", color: "bg-emerald-500", glow: "shadow-emerald-500/50" },
    { emoji: "🙂", label: "Good", value: "Good", color: "bg-blue-500", glow: "shadow-blue-500/50" },
    { emoji: "😐", label: "Okay", value: "Okay", color: "bg-yellow-500", glow: "shadow-yellow-500/50" },
    { emoji: "😕", label: "Low", value: "Low", color: "bg-orange-500", glow: "shadow-orange-500/50" },
    { emoji: "😢", label: "Poor", value: "Poor", color: "bg-red-500", glow: "shadow-red-500/50" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMood) {
      toast.error("Please select a mood");
      return;
    }

    const newEntry: MoodEntry = {
      mood: selectedMood,
      energy: energy[0],
      notes: notes,
      date: new Date().toISOString(), // Ensure backend handles ISO string
    };

    createMutation.mutate(newEntry);
  };

  return (
    <Layout>
      <div className="space-y-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-sm">
              Mood & Energy
            </h1>
            <p className="text-muted-foreground mt-1">
              Reflect on your day and track your mental state.
            </p>
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-purple-600 text-white font-bold hover:bg-purple-700 shadow-neon-purple transition-all hover:scale-105">
                <Plus className="w-4 h-4 mr-2" />
                Check In
              </Button>
            </DialogTrigger>
            <DialogContent className="glass-card border-white/10 text-white sm:max-w-xl backdrop-blur-xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Daily Check-In</DialogTitle>
              </DialogHeader>
              <div className="space-y-6 mt-4">
                {/* Mood Selector */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-300">How are you feeling?</label>
                  <div className="grid grid-cols-5 gap-2">
                    {moods.map((mood) => (
                      <motion.button
                        key={mood.value}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedMood(mood.value)}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-300 ${selectedMood === mood.value
                            ? `${mood.color} border-transparent ${mood.glow} text-white`
                            : "bg-black/40 border-white/10 text-gray-400 hover:border-white/30"
                          }`}
                      >
                        <div className="text-3xl mb-1 filter drop-shadow-md">{mood.emoji}</div>
                        <div className="text-[10px] uppercase font-bold tracking-wider">{mood.label}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Energy Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-gray-300">Energy Level</label>
                    <span className="text-2xl font-bold text-yellow-400 text-glow">{energy[0]}<span className="text-sm text-gray-500">/10</span></span>
                  </div>
                  <Slider
                    value={energy}
                    onValueChange={setEnergy}
                    min={1}
                    max={10}
                    step={1}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground uppercase tracking-widest">
                    <span>Low Battery</span>
                    <span>Fully Charged</span>
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-300">Notes (optional)</label>
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="What's on your mind?"
                    rows={3}
                    className="bg-black/40 border-white/10 resize-none focus:border-purple-500 focus:ring-purple-500/20"
                  />
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={createMutation.isPending}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold shadow-neon-purple mt-2"
                >
                  {createMutation.isPending ? "Saving..." : "Save Entry"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Analytics Chart */}
        {!isLoading && history.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <MoodChart entries={history} />
          </motion.div>
        )}

        {/* History List */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {history.map((entry: any, index: number) => {
              const moodObj = moods.find(m => m.value === entry.mood) || moods[2];
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="glass-card p-5 rounded-2xl relative group hover:border-purple-500/30 transition-colors"
                  layout
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl ${moodObj.color} flex items-center justify-center text-2xl shadow-lg`}>
                        {moodObj.emoji}
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">{moodObj.label}</div>
                        <div className="text-xs text-purple-400 flex items-center gap-1">
                          <Battery className="w-3 h-3" /> Energy: {entry.energy}/10
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteMutation.mutate(entry.id)}
                      className="text-muted-foreground hover:text-red-400 hover:bg-red-500/10 -mt-1 -mr-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  {entry.notes && (
                    <div className="mt-3 p-3 rounded-lg bg-white/5 border border-white/5 text-sm text-gray-300 italic">
                      <MessageSquare className="w-3 h-3 inline mr-2 text-muted-foreground" />
                      "{entry.notes}"
                    </div>
                  )}

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-muted-foreground/60">
                    <Calendar className="w-3 h-3" />
                    {new Date(entry.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {!isLoading && history.length === 0 && (
            <div className="col-span-full py-20 text-center glass-card rounded-2xl">
              <div className="text-6xl mb-4">🧘</div>
              <h3 className="text-xl font-semibold text-white">No entries yet</h3>
              <p className="text-muted-foreground mt-2">Take a moment to check in with yourself.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Mood;



================================================================================
FILE PATH: frontend\src\pages\MoodV2.tsx
================================================================================


import React, { useState } from "react";
import { motion } from "framer-motion";
import MoodToolbar from "../components/mood/MoodToolbar";
import MoodList from "../components/mood/MoodList";
import MoodDetailModal from "../components/mood/MoodDetailModal";
import MoodFormModal from "../components/mood/MoodFormModal";
import "../styles/mood.css";
// import { useCurrentUser } from "../hooks/useCurrentUser"; 
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { moodService, MoodEntry } from "@/services/moodService";
import { toast } from "sonner";

export default function MoodV2() {
  const queryClient = useQueryClient();
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<MoodEntry | null>(null);

  // Fetch Moods
  const { data: moodEntries = [], isLoading } = useQuery({
    queryKey: ['moods'],
    queryFn: moodService.getAll,
  });

  const deleteMutation = useMutation({
    mutationFn: moodService.delete,
    onSuccess: () => {
      toast.success("Mood deleted");
      queryClient.invalidateQueries({ queryKey: ['moods'] });
    },
    onError: () => toast.error("Failed to delete mood"),
  });

  const handleLogMood = () => {
    setIsFormModalOpen(true);
  };

  const handleSelectEntry = (entryId: string) => {
    const entry = moodEntries.find((e: MoodEntry) => e.id === entryId);
    if (entry) {
      setSelectedEntry(entry);
      setIsDetailModalOpen(true);
    }
  };

  const handleEditEntry = (entryId: string) => {
    // For now, treat edit same as select, but we could open a different modal or mode
    const entry = moodEntries.find((e: MoodEntry) => e.id === entryId);
    if (entry) {
      setSelectedEntry(entry);
      setIsDetailModalOpen(true);
    }
  };

  const handleDeleteEntry = (entryId: string) => {
    if (window.confirm("Are you sure you want to delete this mood entry?")) {
      deleteMutation.mutate(entryId);
    }
  };

  const handleSaveDetail = (updatedEntry: MoodEntry) => {
    // This is where update logic would go if MoodDetailModal handles edits
    // For now we just close it as it might be read-only or we implement update later
    setIsDetailModalOpen(false);
    toast.info("Update feature coming soon!");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 md:p-8"
    >
      <MoodToolbar onLogMood={handleLogMood} />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-8"
      >
        <h2 className="text-2xl font-bold text-foreground mb-4">Mood History</h2>
        <MoodList
          entries={moodEntries}
          onSelect={handleSelectEntry}
          onEdit={handleEditEntry}
          onDelete={handleDeleteEntry}
          loading={isLoading}
        />
      </motion.div>

      <MoodDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        onSave={handleSaveDetail}
        initialEntry={selectedEntry}
      />

      <MoodFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
      />
    </motion.div>
  );
}


================================================================================
FILE PATH: frontend\src\pages\NotFound.tsx
================================================================================

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/80">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;


================================================================================
FILE PATH: frontend\src\pages\Nutrition.tsx
================================================================================

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Trash2, Utensils, Clock, Flame } from "lucide-react";
import Layout from "@/components/Layout";
import { toast } from "sonner";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { nutritionService, Meal } from "@/services/nutritionService";
import NutritionChart from "@/components/nutrition/NutritionChart";
import { motion, AnimatePresence } from "framer-motion";

const Nutrition = () => {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data: meals = [], isLoading } = useQuery({
    queryKey: ['meals'],
    queryFn: async () => {
      const res = await nutritionService.getAll();
      return res;
    },
  });

  const createMutation = useMutation({
    mutationFn: nutritionService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['meals'] });
      toast.success("Meal logged!");
      setOpen(false);
    },
    onError: () => toast.error("Failed to log meal"),
  });

  const deleteMutation = useMutation({
    mutationFn: nutritionService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['meals'] });
      toast.success("Meal deleted");
    },
    onError: () => toast.error("Failed to delete meal"),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Combining date and time for dateTime
    const date = formData.get('date') as string;
    const time = formData.get('time') as string;
    const dateTime = new Date(`${date}T${time}`).toISOString();

    const newMeal: Meal = {
      title: formData.get('title') as string,
      type: formData.get('type') as string,
      calories: Number(formData.get('calories')),
      protein: Number(formData.get('protein')),
      carbs: Number(formData.get('carbs')),
      fat: Number(formData.get('fat')),
      dateTime,
    };

    createMutation.mutate(newMeal);
  };

  // Calculate daily totals for today
  const today = new Date().toDateString();
  const todaysMeals = meals.filter((m: Meal) => new Date(m.dateTime || "").toDateString() === today);
  const dailyTotals = todaysMeals.reduce((acc: any, meal: Meal) => ({
    calories: acc.calories + meal.calories,
    protein: acc.protein + meal.protein,
    carbs: acc.carbs + meal.carbs,
    fat: acc.fat + meal.fat,
  }), { calories: 0, protein: 0, carbs: 0, fat: 0 });

  return (
    <Layout>
      <div className="space-y-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 drop-shadow-sm">
              Nutrition Tracker
            </h1>
            <p className="text-muted-foreground mt-1">
              Fuel your body perfectly.
            </p>
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-emerald-500 text-white font-bold hover:bg-emerald-600 shadow-neon-green transition-all hover:scale-105">
                <Plus className="w-4 h-4 mr-2" />
                Log Meal
              </Button>
            </DialogTrigger>
            <DialogContent className="glass-card border-white/10 text-white sm:max-w-xl backdrop-blur-xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Log Meal</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Input name="date" type="date" className="bg-black/40 border-white/10" required defaultValue={new Date().toISOString().split('T')[0]} />
                  </div>
                  <div className="space-y-2">
                    <Label>Time</Label>
                    <Input name="time" type="time" className="bg-black/40 border-white/10" required defaultValue="12:00" />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label>Meal Title</Label>
                    <Input name="title" placeholder="e.g., Grilled Chicken Salad" className="bg-black/40 border-white/10" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Type</Label>
                    <Select name="type" required>
                      <SelectTrigger className="bg-black/40 border-white/10">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/90 border-white/10">
                        <SelectItem value="Breakfast">Breakfast</SelectItem>
                        <SelectItem value="Lunch">Lunch</SelectItem>
                        <SelectItem value="Dinner">Dinner</SelectItem>
                        <SelectItem value="Snack">Snack</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Calories</Label>
                    <Input name="calories" type="number" placeholder="500" className="bg-black/40 border-white/10" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Protein (g)</Label>
                    <Input name="protein" type="number" placeholder="30" className="bg-black/40 border-white/10" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Carbs (g)</Label>
                    <Input name="carbs" type="number" placeholder="50" className="bg-black/40 border-white/10" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Fat (g)</Label>
                    <Input name="fat" type="number" placeholder="20" className="bg-black/40 border-white/10" required />
                  </div>
                </div>
                <Button type="submit" disabled={createMutation.isPending} className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold shadow-neon-green">
                  {createMutation.isPending ? "Saving..." : "Save Meal"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Daily Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center text-center">
            <span className="text-muted-foreground text-xs uppercase tracking-wider">Calories</span>
            <span className="text-2xl font-bold text-white mt-1">{dailyTotals.calories}</span>
            <span className="text-xs text-emerald-400">kcal</span>
          </div>
          <div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center text-center">
            <span className="text-muted-foreground text-xs uppercase tracking-wider">Protein</span>
            <span className="text-2xl font-bold text-white mt-1">{dailyTotals.protein}g</span>
            <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-blue-400" style={{ width: '60%' }} />
            </div>
          </div>
          <div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center text-center">
            <span className="text-muted-foreground text-xs uppercase tracking-wider">Carbs</span>
            <span className="text-2xl font-bold text-white mt-1">{dailyTotals.carbs}g</span>
            <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-teal-400" style={{ width: '40%' }} />
            </div>
          </div>
          <div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center text-center">
            <span className="text-muted-foreground text-xs uppercase tracking-wider">Fat</span>
            <span className="text-2xl font-bold text-white mt-1">{dailyTotals.fat}g</span>
            <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-rose-400" style={{ width: '30%' }} />
            </div>
          </div>
        </div>

        {/* Chart */}
        {!isLoading && meals.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <NutritionChart meals={meals} />
          </motion.div>
        )}

        {/* Meal List */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {meals.map((meal: any, index: number) => (
              <motion.div
                key={meal.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="glass-card p-5 rounded-2xl relative group hover:border-emerald-500/30 transition-colors"
                layout
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center text-emerald-400">
                      <Utensils className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white leading-tight">{meal.title}</h3>
                      <p className="text-xs text-emerald-400 font-medium">{meal.type}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteMutation.mutate(meal.id)}
                    className="text-muted-foreground hover:text-red-400 hover:bg-red-500/10 -mt-1 -mr-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-y-3 text-sm text-muted-foreground mt-2">
                  <div className="text-center p-2 rounded-lg bg-white/5 border border-white/5">
                    <div className="text-blue-400 font-bold">{meal.protein}g</div>
                    <div className="text-[10px] uppercase">Prot</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-white/5 border border-white/5">
                    <div className="text-teal-400 font-bold">{meal.carbs}g</div>
                    <div className="text-[10px] uppercase">Carb</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-white/5 border border-white/5">
                    <div className="text-rose-400 font-bold">{meal.fat}g</div>
                    <div className="text-[10px] uppercase">Fat</div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4 pt-3 border-t border-white/5 text-xs text-muted-foreground/60">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {new Date(meal.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                  <div className="flex items-center gap-1 font-semibold text-white">
                    <Flame className="w-3 h-3 text-orange-400" />
                    {meal.calories} kcal
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {!isLoading && meals.length === 0 && (
            <div className="col-span-full py-20 text-center glass-card rounded-2xl">
              <Utensils className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
              <h3 className="text-xl font-semibold text-white">No meals logged</h3>
              <p className="text-muted-foreground mt-2">Start tracking your macros today!</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Nutrition;


================================================================================
FILE PATH: frontend\src\pages\NutritionV2.tsx
================================================================================


import React, { useState } from "react";
import { motion } from "framer-motion";
import NutritionToolbar from "../components/nutrition/NutritionToolbar";
import MealList from "../components/nutrition/MealList";
import MealDetailModal from "../components/nutrition/MealDetailModal";
import NutritionChart from "../components/nutrition/NutritionChart";
import MealFormModal from "../components/nutrition/MealFormModal";
import "../styles/nutrition.css";
// import { useCurrentUser } from "../hooks/useCurrentUser"; 
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { nutritionService, Meal } from "@/services/nutritionService";
import { toast } from "sonner";

export default function NutritionV2() {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Fetch Meals
  const { data: meals = [], isLoading } = useQuery({
    queryKey: ['meals'],
    queryFn: nutritionService.getAll,
  });

  const deleteMutation = useMutation({
    mutationFn: nutritionService.delete,
    onSuccess: () => {
      toast.success("Meal deleted");
      queryClient.invalidateQueries({ queryKey: ['meals'] });
      queryClient.invalidateQueries({ queryKey: ['dashboardSummary'] });
    },
    onError: () => toast.error("Failed to delete meal"),
  });

  // Calculate Macros
  const dailyTop = {
    calories: 2000,
    protein: 150,
    carbs: 250,
    fat: 70
  };

  const currentMacros = meals.reduce((acc: any, meal: Meal) => ({
    calories: acc.calories + meal.calories,
    protein: acc.protein + meal.protein,
    carbs: acc.carbs + meal.carbs,
    fat: acc.fat + meal.fat
  }), { calories: 0, protein: 0, carbs: 0, fat: 0 });

  const filteredMeals = meals.filter((meal: Meal) => {
    const matchesSearch = meal.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === "all" || meal.type.toLowerCase() === filterType.toLowerCase();
    // In a real app we would filter by date too
    return matchesSearch && matchesFilter;
  });

  const handleSearch = (query: string) => setSearchQuery(query);
  const handleFilter = (filter: string) => setFilterType(filter);
  const handleDateChange = (date: Date | undefined) => setSelectedDate(date);

  const handleNewMeal = () => {
    setIsFormModalOpen(true);
  };

  const handleSelectMeal = (mealId: string) => {
    const meal = meals.find((m: Meal) => m.id === mealId);
    if (meal) {
      setSelectedMeal(meal);
      setIsDetailModalOpen(true);
    }
  };

  const handleEditMeal = (mealId: string) => {
    const meal = meals.find((m: Meal) => m.id === mealId);
    if (meal) {
      setSelectedMeal(meal);
      setIsFormModalOpen(true);
    }
  };



  const handleDeleteMeal = (mealId: string) => {
    deleteMutation.mutate(mealId);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 md:p-8"
    >
      <NutritionToolbar
        onSearch={handleSearch}
        onFilter={handleFilter}
        onNewMeal={handleNewMeal}
        onDateChange={handleDateChange}
      />

      {/* Hero Summary */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <Card className="nutrition-neon p-6">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl font-bold">Daily Summary</CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Calories: {currentMacros.calories}/{dailyTop.calories} kcal</span>
                <span>{(currentMacros.calories / dailyTop.calories * 100).toFixed(0)}%</span>
              </div>
              <Progress value={Math.min(100, currentMacros.calories / dailyTop.calories * 100)} className="h-2 bg-primary/20" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Protein: {currentMacros.protein}/{dailyTop.protein}g</span>
                <span>{(currentMacros.protein / dailyTop.protein * 100).toFixed(0)}%</span>
              </div>
              <Progress value={Math.min(100, currentMacros.protein / dailyTop.protein * 100)} className="h-2 bg-primary/20 [&::-webkit-progress-value]:bg-green-400" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Carbs: {currentMacros.carbs}/{dailyTop.carbs}g</span>
                <span>{(currentMacros.carbs / dailyTop.carbs * 100).toFixed(0)}%</span>
              </div>
              <Progress value={Math.min(100, currentMacros.carbs / dailyTop.carbs * 100)} className="h-2 bg-primary/20 [&::-webkit-progress-value]:bg-orange-400" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Fat: {currentMacros.fat}/{dailyTop.fat}g</span>
                <span>{(currentMacros.fat / dailyTop.fat * 100).toFixed(0)}%</span>
              </div>
              <Progress value={Math.min(100, currentMacros.fat / dailyTop.fat * 100)} className="h-2 bg-primary/20 [&::-webkit-progress-value]:bg-pink-500" />
            </div>
          </CardContent>
        </Card>
        <NutritionChart meals={meals} />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <MealList
            meals={filteredMeals}
            onSelect={handleSelectMeal}
            onEdit={handleEditMeal}
            onDelete={handleDeleteMeal}
            loading={isLoading}
            onLoadMore={() => { }}
            hasMore={false}
          />
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-1 hidden lg:block space-y-8"
        >
          {/* Quick Actions for Nutrition */}
          <Card className="nutrition-neon p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl font-bold">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
              <Button onClick={handleNewMeal} className="w-full focus-outline">
                <PlusCircle className="mr-2 h-5 w-5" /> Log New Meal
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <MealDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        meal={selectedMeal as any}
        onEdit={handleEditMeal}
      />
      <MealFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        initialData={selectedMeal}
      />
    </motion.div>
  );
}


================================================================================
FILE PATH: frontend\src\pages\Pricing.tsx
================================================================================


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Menu, X } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';

const Pricing: React.FC = () => {
  const navigate = useNavigate();
  // ... rest of component


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
  ];

  const slideInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' as const } },
  };

  const pricingPlans = [
    {
      name: 'Basic',
      price: 'Free',
      frequency: '',
      features: [
        'Track Workouts',
        'Basic Nutrition Logging',
        'Echo Score (Daily)',
        'Community Access',
      ],
      buttonText: 'Get Started',
      accentColor: 'bg-muted',
    },
    {
      name: 'Pro',
      price: '₹79',
      frequency: '/ month',
      features: [
        'All Basic Features',
        'Advanced Nutrition Analytics',
        'Detailed Echo Score Trends',
        'Personalized Coaching AI',
        'Priority Support',
      ],
      buttonText: 'Go Pro',
      accentColor: 'bg-primary',
      isPopular: true,
    },
    {
      name: 'Premium',
      price: '₹199',
      frequency: '/ month',
      features: [
        'All Pro Features',
        'Custom Workout Plans',
        'Meal Planning & Recipes',
        'Exclusive Content',
        'Dedicated Support',
      ],
      buttonText: 'Get Premium',
      accentColor: 'bg-secondary',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="animated-bg"></div>
      </div>

      {/* Navbar */}
      <motion.nav
        className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/placeholder.svg" alt="EchoBody Logo" className="h-8 mr-2" />
            <span className="text-2xl font-bold text-foreground">EchoBody</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-muted-foreground hover:text-primary transition-colors duration-300 holographic-underline ${link.name === 'Pricing' ? 'text-primary' : ''
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/login" className="text-muted-foreground hover:text-primary transition-colors duration-300 holographic-underline">
              Login
            </Link>
            <motion.button
              className="relative px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold overflow-hidden group holographic-sheen"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get Started</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-foreground focus:outline-none">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-background bg-opacity-95 z-20 flex flex-col items-center py-4 space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-muted-foreground hover:text-primary transition-colors duration-300 text-lg`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/login" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-lg">
              Login
            </Link>
            <motion.button
              className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold holographic-sheen"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </motion.nav>

      <main className="relative z-10 container mx-auto px-6 text-center py-20">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight text-foreground mb-6 drop-shadow-lg"
          variants={slideInUp}
          initial="hidden"
          animate="visible"
        >
          Flexible Plans for Every Goal
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
          variants={slideInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Choose the EchoBody plan that fits your fitness journey.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`glass-card relative rounded-xl p-8 flex flex-col items-center text-center overflow-hidden transform transition-all duration-300 hover:scale-105 ${plan.isPopular ? 'border-primary shadow-lg shadow-primary/20' : ''
                }`}
              variants={slideInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <h2 className="text-3xl font-bold text-foreground mb-4">{plan.name}</h2>
              <p className="text-5xl font-extrabold text-foreground mb-2">
                {plan.price}
                <span className="text-lg font-medium text-muted-foreground">{plan.frequency}</span>
              </p>
              <ul className="text-muted-foreground text-left space-y-3 my-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckCircle size={20} className="text-primary mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                className={`mt-auto w-full relative px-8 py-3 rounded-full ${plan.accentColor} text-foreground font-bold text-lg flex items-center justify-center overflow-hidden group holographic-sheen`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const token = localStorage.getItem('token');
                  if (token) {
                    toast.success(`Upgraded to ${plan.name} Plan!`);
                    navigate('/dashboard');
                  } else {
                    navigate('/register');
                  }
                }}
              >
                <span className="relative z-10">{plan.buttonText}</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </main >
    </div >
  );
};

export default Pricing;


================================================================================
FILE PATH: frontend\src\pages\Profile.tsx
================================================================================

import { useState } from "react";
import { CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, TrendingUp, User, Ruler, Weight, Target, Edit2, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { userService, UserProfile } from "@/services/userService";
import { toast } from "sonner";
import { motion } from "framer-motion";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: userService.getProfile,
    // Provide some default dummy data if backend is empty/failing during dev
    initialData: {
      id: "1",
      name: "User",
      email: "user@example.com",
      age: 25,
      height_cm: 175,
      weight_kg: 70,
      goal: "Build Muscle",
      gender: "Prefer not to say"
    } as UserProfile
  });

  const updateMutation = useMutation({
    mutationFn: userService.updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      toast.success("Profile updated successfully!");
      setOpen(false);
    },
    onError: () => toast.error("Failed to update profile"),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const updatedUser: UserProfile = {
      ...user,
      name: formData.get('name') as string,
      age: Number(formData.get('age')),
      height_cm: Number(formData.get('height')),
      weight_kg: Number(formData.get('weight')),
      goal: formData.get('goal') as string,
      gender: formData.get('gender') as string,
    };

    updateMutation.mutate(updatedUser);
  };

  const accountStats = [
    { label: "Account Type", value: "Premium", icon: Shield, color: "text-yellow-400" },
    { label: "Member Since", value: "Jan 2024", icon: Calendar, color: "text-blue-400" },
    { label: "Current Streak", value: "7 Days", icon: TrendingUp, color: "text-emerald-400" },
  ];

  if (isLoading) return <Layout><div className="text-white">Loading profile...</div></Layout>;

  return (
    <Layout>
      <div className="space-y-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card overflow-hidden relative rounded-3xl"
        >
          {/* Banner Bg */}
          <div className="h-32 bg-gradient-to-r from-blue-600/20 to-purple-600/20 w-full absolute top-0 left-0" />

          <CardContent className="pt-16 pb-8 relative z-10 px-8">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
              <Avatar className="w-32 h-32 border-4 border-black shadow-2xl ring-4 ring-primary/20">
                <AvatarFallback className="text-4xl bg-gradient-to-br from-primary to-accent text-white font-bold">
                  {user.name?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left space-y-2">
                <div>
                  <h1 className="text-3xl font-extrabold text-white tracking-tight">{user.name}</h1>
                  <p className="text-muted-foreground font-medium">{user.email}</p>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                    {user.goal || "No Goal Set"}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20">
                    {user.gender || "Human"}
                  </span>
                </div>
              </div>

              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-md transition-all">
                    <Edit2 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass-card border-white/10 text-white sm:max-w-lg backdrop-blur-xl">
                  <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2 col-span-2">
                        <Label>Full Name</Label>
                        <Input name="name" defaultValue={user.name} className="bg-black/40 border-white/10" required />
                      </div>
                      <div className="space-y-2">
                        <Label>Age</Label>
                        <Input name="age" type="number" defaultValue={user.age} className="bg-black/40 border-white/10" />
                      </div>
                      <div className="space-y-2">
                        <Label>Gender</Label>
                        <Select name="gender" defaultValue={user.gender}>
                          <SelectTrigger className="bg-black/40 border-white/10">
                            <SelectValue placeholder="Gender" />
                          </SelectTrigger>
                          <SelectContent className="bg-black/90 border-white/10">
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                            <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Height (cm)</Label>
                        <Input name="height" type="number" defaultValue={user.height_cm} className="bg-black/40 border-white/10" />
                      </div>
                      <div className="space-y-2">
                        <Label>Weight (kg)</Label>
                        <Input name="weight" type="number" defaultValue={user.weight_kg} className="bg-black/40 border-white/10" />
                      </div>
                      <div className="space-y-2 col-span-2">
                        <Label>Primary Goal</Label>
                        <Select name="goal" defaultValue={user.goal}>
                          <SelectTrigger className="bg-black/40 border-white/10">
                            <SelectValue placeholder="Select Goal" />
                          </SelectTrigger>
                          <SelectContent className="bg-black/90 border-white/10">
                            <SelectItem value="Lose Weight">Lose Weight</SelectItem>
                            <SelectItem value="Build Muscle">Build Muscle</SelectItem>
                            <SelectItem value="Maintain Weight">Maintain Weight</SelectItem>
                            <SelectItem value="Improve Endurance">Improve Endurance</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button type="submit" disabled={updateMutation.isPending} className="w-full bg-primary text-black font-bold hover:bg-primary/90 mt-4">
                      {updateMutation.isPending ? "Saving..." : "Save Changes"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </motion.div>

        {/* Body Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="glass-card p-5 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 mb-2">
              <User className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold text-white group-hover:scale-110 transition-transform">{user.age}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Years Old</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="glass-card p-5 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-500 mb-2">
              <Ruler className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold text-white group-hover:scale-110 transition-transform">{user.height_cm}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">cm Height</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="glass-card p-5 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-500 mb-2">
              <Weight className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold text-white group-hover:scale-110 transition-transform">{user.weight_kg}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">kg Weight</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="glass-card p-5 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 mb-2">
              <Target className="w-5 h-5" />
            </div>
            <div className="text-sm font-bold text-white mt-1 mb-1 line-clamp-1">{user.goal}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Primary Goal</div>
          </motion.div>
        </div>

        {/* Account Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {accountStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 rounded-2xl flex items-center gap-4 group"
              >
                <div className={`p-4 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors ${stat.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;


================================================================================
FILE PATH: frontend\src\pages\ProfileV2.tsx
================================================================================


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCurrentUser } from "../hooks/useCurrentUser";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileStatsGrid from "../components/profile/ProfileStatsGrid";
import ProfileSummaryCards from "../components/profile/ProfileSummaryCards";
import EditProfileModal from "../components/profile/EditProfileModal";
import "../styles/profile.css";
import { Skeleton } from "@/components/ui/skeleton";
import { userService } from "@/services/userService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function ProfileV2() {
  const { user, loading, error } = useCurrentUser();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [localUser, setLocalUser] = useState(user);

  useEffect(() => {
    setLocalUser(user);
  }, [user]);

  const handleEditProfile = () => {
    setIsEditModalOpen(true);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: userService.updateProfile,
    onSuccess: (data) => {
      setLocalUser(data);
      toast.success("Profile updated successfully!");
      queryClient.invalidateQueries({ queryKey: ['currentUser'] }); // Assuming useCurrentUser uses this key
    },
    onError: () => {
      toast.error("Failed to update profile.");
    }
  });

  const handleSaveProfile = (updatedUser: any) => {
    mutation.mutate(updatedUser);
  };

  const mockSummaryStats = {
    totalWorkouts: 156,
    memberSince: "Jan 2023",
    currentStreak: 14,
  };

  if (loading) {
    return (
      <div className="p-4 md:p-8 space-y-8">
        <Skeleton className="h-32 w-full" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-32 w-full" />)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => <Skeleton key={i} className="h-32 w-full" />)}
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="p-4 md:p-8 text-red-500">Error loading profile: {error}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 md:p-8 space-y-8"
    >
      <ProfileHeader
        name={localUser?.name || "User"}
        email={localUser?.email || "user@example.com"}
        onEdit={handleEditProfile}
      />

      {localUser && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">Body Statistics</h2>
          <ProfileStatsGrid user={localUser} />
        </motion.div>
      )}

      {localUser && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">Summary</h2>
          <ProfileSummaryCards stats={mockSummaryStats} />
        </motion.div>
      )}

      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSaveProfile}
        currentUser={localUser}
      />
    </motion.div>
  );
}


================================================================================
FILE PATH: frontend\src\pages\Progress.tsx
================================================================================

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Target, Flame, Award } from "lucide-react";
import Layout from "@/components/Layout";
import { useQuery } from "@tanstack/react-query";
import { progressService } from "@/services/progressService";
import ProgressChart from "@/components/progress/ProgressChart";
import { motion } from "framer-motion";

const Progress = () => {
  const { data: summary, isLoading: summaryLoading } = useQuery({
    queryKey: ['progressSummary'],
    queryFn: async () => {
      const res = await progressService.getSummary();
      return res.data;
    }
  });

  const { data: trend = [], isLoading: trendLoading } = useQuery({
    queryKey: ['progressTrend'],
    queryFn: async () => {
      const res = await progressService.getTrend();
      return res.data;
    }
  });

  const { data: records = [], isLoading: recordsLoading } = useQuery({
    queryKey: ['progressRecords'],
    queryFn: async () => {
      const res = await progressService.getRecords();
      return res.data;
    }
  });

  const stats = [
    { label: "Total Workouts", value: summary?.totalWorkouts || "0", icon: Trophy, color: "text-yellow-400", bg: "bg-yellow-400/20" },
    { label: "Total Calories", value: summary?.totalCaloriesBurned?.toLocaleString() || "0", icon: Flame, color: "text-orange-500", bg: "bg-orange-500/20" },
    { label: "Longest Streak", value: `${summary?.longestStreak || 0} days`, icon: Award, color: "text-blue-400", bg: "bg-blue-400/20" },
    { label: "Avg Echo Score", value: summary?.avgEchoScore || "0", icon: Target, color: "text-purple-400", bg: "bg-purple-400/20" },
  ];

  return (
    <Layout>
      <div className="space-y-8 max-w-6xl mx-auto">
        <div>
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 drop-shadow-sm">
            Your Evolution
          </h1>
          <p className="text-muted-foreground mt-1">
            Visualize your journey and celebrate milestones.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity`}>
                  <Icon className="w-24 h-24" />
                </div>
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <p className="text-3xl font-bold text-white mb-1 group-hover:scale-105 transition-transform origin-left">{stat.value}</p>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Echo Score Trend */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          {!trendLoading && <ProgressChart data={trend} />}
        </motion.div>

        {/* Personal Records */}
        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            Personal Records
          </h2>
          <div className="grid gap-3">
            {!recordsLoading && records.length > 0 ? (
              records.map((record: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/5 flex items-center justify-center text-yellow-500 font-bold text-sm">
                      #{index + 1}
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">{record.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(record.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                      {record.value} <span className="text-sm text-muted-foreground font-medium">{record.unit}</span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">No records set yet. Keep pushing!</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Progress;


================================================================================
FILE PATH: frontend\src\pages\ProgressV2.tsx
================================================================================


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useQuery } from "@tanstack/react-query";
import { progressService } from "@/services/progressService";
import StatCard from "../components/progress/StatCard";
import ProgressChart from "../components/progress/ProgressChart";
import MiniSparkline from "../components/progress/MiniSparkline";
import RecordsList from "../components/progress/RecordsList";
import RangeFilter from "../components/progress/RangeFilter";
import "../styles/progress.css";
import { Dumbbell, Flame, TrendingUp, Gauge, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// Mock data for demonstration
const mockSummary = {
  totalWorkouts: 156,
  totalCaloriesBurned: 42500,
  longestStreak: 14,
  avgEchoScore: 78,
};

const mockTrendData = Array.from({ length: 90 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (90 - i));
  return {
    date: date.toISOString().split("T")[0],
    score: Math.floor(Math.random() * 30) + 60, // Score between 60-90
  };
});

const mockSparklineData = Array.from({ length: 30 }, (_, i) => ({
  name: `Day ${i + 1}`,
  value: Math.floor(Math.random() * 10) + 1,
}));

const mockRecords = [
  { id: "1", name: "Deadlift", date: "2024-01-05", value: 160, unit: "kg" },
  { id: "2", name: "Bench Press", date: "2024-02-10", value: 100, unit: "kg" },
  { id: "3", name: "Squat", date: "2024-03-15", value: 140, unit: "kg" },
];

export default function ProgressV2() {
  const { user, loading: userLoading } = useCurrentUser();
  /*
  const [summary, setSummary] = useState(mockSummary);
  */
  /*
  const [trendData, setTrendData] = useState(mockTrendData);
  const [records, setRecords] = useState(mockRecords);
  */
  // const [loading, setLoading] = useState(true); // Don't rely on local loading state
  const [dateRange, setDateRange] = useState("90");

  const { data: summary = mockSummary, isLoading: isSummaryLoading } = useQuery({
    queryKey: ['progressSummary'],
    queryFn: progressService.getSummary,
  });

  const { data: trendData = [], isLoading: isTrendLoading } = useQuery({
    queryKey: ['progressTrend'],
    queryFn: progressService.getTrend,
  });

  const { data: records = [], isLoading: isRecordsLoading } = useQuery({
    queryKey: ['progressRecords'],
    queryFn: progressService.getRecords,
  });

  const loading = isSummaryLoading || isTrendLoading || isRecordsLoading;

  const handleRangeChange = (range: string) => {
    setDateRange(range);
  };

  const handleEditRecord = (recordId: string) => {
    alert(`Edit record ${recordId} (Not implemented yet - records are auto-generated from workouts)`);
  };

  const handleDeleteRecord = (recordId: string) => {
    // Allow delete maybe? Or just info that it's derived data.
    alert("Records are derived from your workout history. To delete a record, delete the corresponding workout.");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  if (loading) {
    return (
      <div className="p-4 md:p-8 space-y-8">
        <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-3xl font-bold text-foreground">Your Progress</motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => <motion.div key={i} variants={itemVariants}><StatCard icon={<Dumbbell />} label="Loading" value="..." /></motion.div>)}
        </div>
        <Skeleton className="h-80 w-full" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => <Skeleton key={i} className="h-40 w-full" />)}
        </div>
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="p-4 md:p-8"
    >
      <motion.div variants={itemVariants} className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-foreground">Your Progress</h1>
        <RangeFilter onRangeChange={handleRangeChange} initialRange={dateRange} />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <motion.div variants={itemVariants}>
          <StatCard
            icon={<Dumbbell className="h-5 w-5 text-primary" />}
            label="Total Workouts"
            value={summary.totalWorkouts}
            delta={{ value: "+12%", isPositive: true }}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard
            icon={<Flame className="h-5 w-5 text-orange-400" />}
            label="Total Calories Burned"
            value={summary.totalCaloriesBurned}
            delta={{ value: "+8%", isPositive: true }}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard
            icon={<TrendingUp className="h-5 w-5 text-green-400" />}
            label="Longest Streak"
            value={`${summary.longestStreak} days`}
            delta={{ value: "+2 days", isPositive: true }}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard
            icon={<Gauge className="h-5 w-5 text-purple-400" />}
            label="Avg. Echo Score"
            value={summary.avgEchoScore}
            delta={{ value: "-1", isPositive: false }}
          />
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="mb-8">
        <ProgressChart
          data={trendData}
          title="Echo Score Trend (Last {dateRange} Days)"
          ariaLabel="Echo Score trend over the last 90 days"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div variants={itemVariants}>
          <MiniSparkline
            data={mockSparklineData}
            title="Workout Frequency"
            value="5 workouts/week"
            color="#00ffd8"
            ariaLabel="Workout frequency trend"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MiniSparkline
            data={mockSparklineData.map(d => ({ ...d, value: d.value * 100 }))}
            title="Calories Trend"
            value="2500 kcal/day"
            color="#7c3aed"
            ariaLabel="Calories trend"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MiniSparkline
            data={mockSparklineData.map(d => ({ ...d, value: d.value * 2 }))}
            title="Streak Timeline"
            value="14 day streak"
            color="#f97316"
            ariaLabel="Streak timeline"
          />
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <Card className="progress-neon">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-2xl font-bold">Personal Records</CardTitle>
            <Button variant="ghost" size="icon" aria-label="Add new record">
              <PlusCircle className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent>
            <RecordsList
              records={records}
              loading={loading}
              onEdit={handleEditRecord}
              onDelete={handleDeleteRecord}
            />
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}


================================================================================
FILE PATH: frontend\src\pages\Register.tsx
================================================================================

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Activity } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Full Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  confirmPassword: z.string().min(8, { message: "Confirm Password must be at least 8 characters." }),
  age: z.coerce.number().min(13, { message: "You must be at least 13 years old." }).max(120, { message: "Age seems too high." }),
  gender: z.enum(["Male", "Female", "Other"], { message: "Please select a gender." }),
  height_cm: z.coerce.number().min(50, { message: "Height must be at least 50 cm." }).max(250, { message: "Height seems too high." }),
  weight_kg: z.coerce.number().min(20, { message: "Weight must be at least 20 kg." }).max(300, { message: "Weight seems too high." }),
  goal: z.enum(["Lose Weight", "Maintain Weight", "Gain Weight"], { message: "Please select a goal." }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match.",
  path: ["confirmPassword"],
});

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: 0,
      gender: undefined,
      height_cm: 0,
      weight_kg: 0,
      goal: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);

    try {
      const { confirmPassword, ...registerData } = values;

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...registerData,
          age: registerData.age,
          height_cm: registerData.height_cm,
          weight_kg: registerData.weight_kg,
        }),
      });

      if (response.ok) {
        toast.success("Account created successfully", { description: "Please login to continue." });
        navigate("/login");
      } else {
        toast.error("Registration failed", { description: "Please try again with different credentials." });
      }
    } catch (error) {
      toast.error("An error occurred", { description: "Please check your network and try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-background">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              staggerChildren: 0.05,
            },
          },
        }}
        className="w-full max-w-2xl relative z-10"
      >
        <div className="glass-card rounded-2xl overflow-hidden p-1">
          <Card className="bg-transparent border-none shadow-none text-foreground">
            <CardHeader className="space-y-4 text-center pb-2">
              <motion.div variants={itemVariants} className="flex justify-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-neon">
                  <Activity className="w-8 h-8 text-black" />
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-1">
                <CardTitle className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white">Create Account</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Start your transformation journey today
                </CardDescription>
              </motion.div>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-black/20 border-white/10 focus:border-primary focus:ring-primary/20 transition-all" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" className="bg-black/20 border-white/10 focus:border-primary focus:ring-primary/20 transition-all" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" className="bg-black/20 border-white/10 focus:border-primary focus:ring-primary/20 transition-all" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Confirm Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" className="bg-black/20 border-white/10 focus:border-primary focus:ring-primary/20 transition-all" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Age</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="25" className="bg-black/20 border-white/10 focus:border-primary focus:ring-primary/20 transition-all" {...field} onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : 0)} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Gender</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-black/20 border-white/10 focus:border-primary focus:ring-primary/20 transition-all">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-black/90 border-white/10 backdrop-blur-xl">
                              <SelectItem value="Male">Male</SelectItem>
                              <SelectItem value="Female">Female</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="height_cm"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Height (cm)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="170" className="bg-black/20 border-white/10 focus:border-primary focus:ring-primary/20 transition-all" {...field} onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : 0)} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="weight_kg"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Weight (kg)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="70" className="bg-black/20 border-white/10 focus:border-primary focus:ring-primary/20 transition-all" {...field} onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : 0)} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="goal"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel className="text-muted-foreground">Goal</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-black/20 border-white/10 focus:border-primary focus:ring-primary/20 transition-all">
                                <SelectValue placeholder="Select your goal" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-black/90 border-white/10 backdrop-blur-xl">
                              <SelectItem value="Lose Weight">Lose Weight</SelectItem>
                              <SelectItem value="Maintain Weight">Maintain Weight</SelectItem>
                              <SelectItem value="Gain Weight">Gain Weight</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <motion.div variants={itemVariants} className="pt-4">
                    <Button
                      type="submit"
                      className="w-full h-11 bg-primary text-black font-bold text-lg hover:bg-primary/90 hover:scale-[1.02] transition-all shadow-neon"
                      disabled={loading}
                    >
                      {loading ? "Creating Account..." : "Create Account"}
                    </Button>
                  </motion.div>
                </form>
              </Form>
              <motion.div variants={itemVariants} className="mt-8 text-center text-sm">
                <p className="text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="font-semibold text-primary hover:text-primary/80 hover:underline transition-colors">
                    Login here
                  </Link>
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

================================================================================
FILE PATH: frontend\src\pages\SampleDashboard.tsx
================================================================================

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Progress } from "@/components/ui/progress";
import { Dumbbell, Flame, Zap, ArrowLeft, Target, Trophy, Lightbulb, User, Calendar, Quote, Utensils, Heart } from 'lucide-react';

const SampleDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("Prarthana");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        if (parsedUser.name) {
          setUserName(parsedUser.name);
        } else if (parsedUser.email) {
          setUserName(parsedUser.email.split('@')[0]); // Use email prefix if name not available
        }
      } catch (error) {
        console.error("Failed to parse user data from localStorage", error);
      }
    }
  }, []);
  const slideInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const statCards = [
    { title: "Workouts this week", value: "3", icon: Dumbbell },
    { title: "Calories consumed", value: "2,100", icon: Flame },
    { title: "Consistency", value: "75%", icon: Zap },
  ];

  const goals = [
    { description: "Run 5k in under 30 minutes", progress: 60 },
    { description: "Lose 5kg by end of month", progress: 80 },
    { description: "Drink 2L water daily", progress: 90 },
  ];

  const achievements = [
    "Completed 30-day plank challenge",
    "Hit new personal best on squat",
    "Maintained calorie deficit for a week",
  ];

  const healthTips = [
    "Stay hydrated: Drink at least 8 glasses of water a day.",
    "Prioritize sleep: Aim for 7-9 hours of quality sleep each night.",
    "Incorporate strength training: Build muscle to boost metabolism.",
  ];

  const upcomingEvents = [
    { date: "Oct 28", event: "Yoga Class" },
    { date: "Oct 30", event: "Cardio Session" },
    { date: "Nov 05", event: "Nutrition Workshop" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden p-8">
      {/* Glowing background gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-[40%] right-[-20%] w-[700px] h-[700px] bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[30%] w-[500px] h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <Link to="/">
          <Button variant="outline" className="bg-transparent text-foreground border-border hover:bg-white/10 hover:text-foreground mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <motion.h1
          className="text-4xl font-bold mb-8"
          variants={slideInUp}
          initial="hidden"
          animate="visible"
        >
          Welcome back, {userName} 👋
        </motion.h1>

        {/* User Profile / Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="lg:col-span-1">
            <Card className="bg-white/5 border-border h-full">
              <CardHeader className="flex flex-row items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-foreground text-xl font-bold">
                  DU
                </div>
                <div>
                  <CardTitle className="text-foreground">Demo User</CardTitle>
                  <p className="text-muted-foreground text-sm">Level 10 Fitness Enthusiast</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start gap-2 bg-white/10 hover:bg-white/20 text-foreground"
                  onClick={() => navigate('/sample-log-workout')}
                >
                  <Dumbbell className="h-4 w-4" /> Log Workout
                </Button>
                <Button className="w-full justify-start gap-2 bg-white/10 hover:bg-white/20 text-foreground"
                  onClick={() => navigate('/sample-log-meal')}
                >
                  <Utensils className="h-4 w-4" /> Log Meal
                </Button>
                <Button className="w-full justify-start gap-2 bg-white/10 hover:bg-white/20 text-foreground"
                  onClick={() => navigate('/sample-log-mood')}
                >
                  <Heart className="h-4 w-4" /> Log Mood
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Echo Score Card */}
          <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="lg:col-span-1">
            <Card className="bg-white/5 border-border h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Echo Score</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <div className="text-7xl font-bold text-secondary">82<span className="text-4xl text-muted-foreground">/100</span></div>
                <p className="text-muted-foreground mt-2">Excellent work!</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Calories and Stats */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
              <Card className="bg-white/5 border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Weekly Calories Burned</CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={65} className="h-4 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-secondary" />
                  <p className="text-right text-muted-foreground mt-2">4,550 / 7,000 kcal</p>
                </CardContent>
              </Card>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {statCards.map((card, index) => (
                <motion.div key={card.title} variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 0.6 + index * 0.2 }}>
                  <Card className="bg-white/5 border-border">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">{card.title}</CardTitle>
                      <card.icon className="h-5 w-5 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-foreground">{card.value}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* New Row for Charts and Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Daily Activity Chart Placeholder */}
          <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 1.2 }}>
            <Card className="bg-white/5 border-border h-full">
              <CardHeader>
                <CardTitle className="text-foreground">Daily Activity</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-48 text-muted-foreground">
                <p>Chart Placeholder (e.g., Bar Chart for Steps/Calories)</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Progress Chart Placeholder */}
          <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 1.4 }}>
            <Card className="bg-white/5 border-border h-full">
              <CardHeader>
                <CardTitle className="text-foreground">Weight Trend</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-48 text-muted-foreground">
                <p>Line Chart Placeholder (e.g., Weight over time)</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* New Row for Goals, Achievements, Tips, Events, and Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Goals Section */}
          <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 1.6 }}>
            <Card className="bg-white/5 border-border h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground"><Target className="mr-2" /> Your Goals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {goals.map((goal, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{goal.description}</span>
                      <span className="font-medium text-foreground/90">{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-2 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-secondary" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Achievements */}
          <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 1.8 }}>
            <Card className="bg-white/5 border-border h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground"><Trophy className="mr-2" /> Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 2.0 }}>
            <Card className="bg-white/5 border-border h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground"><Calendar className="mr-2" /> Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  {upcomingEvents.map((event, index) => (
                    <li key={index} className="flex items-center">
                      <span className="font-bold text-primary w-16 flex-shrink-0">{event.date}:</span>
                      <span>{event.event}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Health Tips */}
          <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 2.2 }}>
            <Card className="bg-white/5 border-border h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground"><Lightbulb className="mr-2" /> Health Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {healthTips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Motivational Quote */}
          <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 2.4 }} className="lg:col-span-2">
            <Card className="bg-white/5 border-border h-full flex flex-col justify-center">
              <CardContent className="text-center p-6">
                <Quote className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
                <p className="text-xl italic text-foreground/90 mb-2">
                  "The only bad workout is the one that didn't happen."
                </p>
                <p className="text-muted-foreground">- Unknown</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes animate-blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        .animate-blob {
          animation: animate-blob 7s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default SampleDashboard;


================================================================================
FILE PATH: frontend\src\pages\SampleLogMeal.tsx
================================================================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Utensils, PlusCircle, Trash2, RotateCcw } from 'lucide-react';
import { toast } from "sonner";

interface FoodItem {
  name: string;
  quantity: string;
  calories: number;
}

const SampleLogMeal: React.FC = () => {
  const navigate = useNavigate();
  const [mealDate, setMealDate] = useState<string>('');
  const [mealType, setMealType] = useState<string>('');
  const [mealNotes, setMealNotes] = useState<string>('');
  const [foodItems, setFoodItems] = useState<FoodItem[]>([{ name: '', quantity: '', calories: 0 }]);

  const slideInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const handleFoodItemChange = (index: number, field: keyof FoodItem, value: string | number) => {
    const newFoodItems = [...foodItems];
    (newFoodItems[index][field] as any) = value;
    setFoodItems(newFoodItems);
  };

  const addFoodItem = () => {
    setFoodItems([...foodItems, { name: '', quantity: '', calories: 0 }]);
  };

  const removeFoodItem = (index: number) => {
    const newFoodItems = foodItems.filter((_, i) => i !== index);
    setFoodItems(newFoodItems);
  };

  const handleClearForm = () => {
    setMealDate('');
    setMealType('');
    setMealNotes('');
    setFoodItems([{ name: '', quantity: '', calories: 0 }]);
    toast.info("Form cleared!");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mealData = {
      mealDate,
      mealType,
      mealNotes,
      foodItems,
    };
    console.log("Logged Meal:", mealData);
    toast.success("Meal logged successfully! (See console for data)");
    // In a real app, you would send this data to a backend API
    handleClearForm(); // Clear form after successful submission
    // navigate(-1); // Optionally go back to dashboard after logging
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden p-8">
      {/* Glowing background gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-[40%] right-[-20%] w-[700px] h-[700px] bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[30%] w-[500px] h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <Button
          variant="outline"
          className="bg-transparent text-foreground border-border hover:bg-white/10 hover:text-foreground mb-8"
          onClick={() => navigate(-1)} // Go back to the previous page (dashboard)
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
        </Button>

        <motion.h1
          className="text-4xl font-bold mb-8"
          variants={slideInUp}
          initial="hidden"
          animate="visible"
        >
          Log Your Meal <Utensils className="inline-block ml-2" />
        </motion.h1>

        <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
          <Card className="bg-white/5 border-border h-full">
            <CardHeader>
              <CardTitle className="text-foreground">Meal Details</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="mealDate" className="text-muted-foreground">Date</Label>
                    <Input
                      id="mealDate"
                      type="date"
                      value={mealDate}
                      onChange={(e) => setMealDate(e.target.value)}
                      className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mealType" className="text-muted-foreground">Meal Type</Label>
                    <Select onValueChange={setMealType} value={mealType} required>
                      <SelectTrigger className="bg-white/10 border-border text-foreground focus:border-primary">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-border text-foreground">
                        <SelectItem value="breakfast">Breakfast</SelectItem>
                        <SelectItem value="lunch">Lunch</SelectItem>
                        <SelectItem value="dinner">Dinner</SelectItem>
                        <SelectItem value="snack">Snack</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Food Items</h3>
                  <div className="space-y-4">
                    {foodItems.map((item, index) => (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end p-4 border-border rounded-md bg-white/5">
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor={`food-name-${index}`} className="text-muted-foreground">Food Name</Label>
                          <Input
                            id={`food-name-${index}`}
                            type="text"
                            value={item.name}
                            onChange={(e) => handleFoodItemChange(index, 'name', e.target.value)}
                            className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                            placeholder="Chicken Breast"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`quantity-${index}`} className="text-muted-foreground">Quantity</Label>
                          <Input
                            id={`quantity-${index}`}
                            type="text"
                            value={item.quantity}
                            onChange={(e) => handleFoodItemChange(index, 'quantity', e.target.value)}
                            className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                            placeholder="150g"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`calories-${index}`} className="text-muted-foreground">Calories</Label>
                          <Input
                            id={`calories-${index}`}
                            type="number"
                            value={item.calories}
                            onChange={(e) => handleFoodItemChange(index, 'calories', Number(e.target.value))}
                            className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                            min="0"
                            required
                          />
                        </div>
                        <div className="space-y-2 flex items-end gap-2">
                          {foodItems.length > 1 && (
                            <Button type="button" variant="destructive" size="icon" onClick={() => removeFoodItem(index)} className="bg-red-600 hover:bg-red-700">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button type="button" variant="outline" className="mt-4 bg-transparent text-foreground border-border hover:bg-white/10 hover:text-foreground" onClick={addFoodItem}>
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Food Item
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mealNotes" className="text-muted-foreground">Meal Notes</Label>
                  <Textarea
                    id="mealNotes"
                    value={mealNotes}
                    onChange={(e) => setMealNotes(e.target.value)}
                    className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                    placeholder="Any additional notes about your meal..."
                    rows={4}
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-grow bg-gradient-to-r from-primary to-secondary text-foreground">
                    Save Meal
                  </Button>
                  <Button type="button" variant="outline" className="flex-grow bg-transparent text-foreground border-border hover:bg-white/10 hover:text-foreground" onClick={handleClearForm}>
                    <RotateCcw className="mr-2 h-4 w-4" /> Clear Form
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes animate-blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        .animate-blob {
          animation: animate-blob 7s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default SampleLogMeal;


================================================================================
FILE PATH: frontend\src\pages\SampleLogMood.tsx
================================================================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Heart, RotateCcw } from 'lucide-react';
import { toast } from "sonner";

const SampleLogMood: React.FC = () => {
  const navigate = useNavigate();
  const [moodDate, setMoodDate] = useState<string>('');
  const [moodLevel, setMoodLevel] = useState<number[]>([5]); // Slider value
  const [moodFactors, setMoodFactors] = useState<string[]>([]);
  const [moodNotes, setMoodNotes] = useState<string>('');

  const slideInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const handleFactorChange = (factor: string, checked: boolean) => {
    setMoodFactors((prev) =>
      checked ? [...prev, factor] : prev.filter((f) => f !== factor)
    );
  };

  const handleClearForm = () => {
    setMoodDate('');
    setMoodLevel([5]);
    setMoodFactors([]);
    setMoodNotes('');
    toast.info("Form cleared!");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const moodData = {
      moodDate,
      moodLevel: moodLevel[0],
      moodFactors,
      moodNotes,
    };
    console.log("Logged Mood:", moodData);
    toast.success("Mood logged successfully! (See console for data)");
    // In a real app, you would send this data to a backend API
    handleClearForm(); // Clear form after successful submission
    // navigate(-1); // Optionally go back to dashboard after logging
  };

  const moodLabels = ["Terrible", "Bad", "Neutral", "Good", "Great"];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden p-8">
      {/* Glowing background gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-[40%] right-[-20%] w-[700px] h-[700px] bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[30%] w-[500px] h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <Button
          variant="outline"
          className="bg-transparent text-foreground border-border hover:bg-white/10 hover:text-foreground mb-8"
          onClick={() => navigate(-1)} // Go back to the previous page (dashboard)
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
        </Button>

        <motion.h1
          className="text-4xl font-bold mb-8"
          variants={slideInUp}
          initial="hidden"
          animate="visible"
        >
          Log Your Mood <Heart className="inline-block ml-2" />
        </motion.h1>

        <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
          <Card className="bg-white/5 border-border h-full">
            <CardHeader>
              <CardTitle className="text-foreground">Mood Details</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="moodDate" className="text-muted-foreground">Date</Label>
                    <Input
                      id="moodDate"
                      type="date"
                      value={moodDate}
                      onChange={(e) => setMoodDate(e.target.value)}
                      className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="moodLevel" className="text-muted-foreground">Mood Level: {moodLabels[moodLevel[0] - 1]}</Label>
                    <Slider
                      id="moodLevel"
                      min={1}
                      max={5}
                      step={1}
                      value={moodLevel}
                      onValueChange={setMoodLevel}
                      className="[&>span:first-child]:bg-white/10 [&>span:first-child]:border-border [&>span:first-child]:focus:ring-primary"
                      thumbClassName="[&>span]:bg-gradient-to-r [&>span]:from-primary [&>span]:to-secondary"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>1 (Terrible)</span>
                      <span>5 (Great)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Factors Influencing Mood</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[ "Sleep", "Stress", "Exercise", "Nutrition", "Work", "Social" ].map((factor) => (
                      <div key={factor} className="flex items-center space-x-2">
                        <Checkbox
                          id={factor}
                          checked={moodFactors.includes(factor)}
                          onCheckedChange={(checked) => handleFactorChange(factor, checked as boolean)}
                          className="border-border data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-primary data-[state=checked]:to-secondary data-[state=checked]:text-foreground"
                        />
                        <Label htmlFor={factor} className="text-muted-foreground">{factor}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="moodNotes" className="text-muted-foreground">Mood Notes</Label>
                  <Textarea
                    id="moodNotes"
                    value={moodNotes}
                    onChange={(e) => setMoodNotes(e.target.value)}
                    className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                    placeholder="Any additional thoughts or feelings..."
                    rows={4}
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-grow bg-gradient-to-r from-primary to-secondary text-foreground">
                    Save Mood
                  </Button>
                  <Button type="button" variant="outline" className="flex-grow bg-transparent text-foreground border-border hover:bg-white/10 hover:text-foreground" onClick={handleClearForm}>
                    <RotateCcw className="mr-2 h-4 w-4" /> Clear Form
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes animate-blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        .animate-blob {
          animation: animate-blob 7s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default SampleLogMood;


================================================================================
FILE PATH: frontend\src\pages\SampleLogWorkout.tsx
================================================================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Dumbbell, PlusCircle, Trash2, RotateCcw } from 'lucide-react';
import { toast } from "sonner";

interface Exercise {
  name: string;
  sets: number;
  reps: number;
  weight: number;
}

const SampleLogWorkout: React.FC = () => {
  const navigate = useNavigate();
  const [workoutDate, setWorkoutDate] = useState<string>('');
  const [workoutType, setWorkoutType] = useState<string>('');
  const [duration, setDuration] = useState<number | string>('');
  const [workoutNotes, setWorkoutNotes] = useState<string>('');
  const [exercises, setExercises] = useState<Exercise[]>([{ name: '', sets: 0, reps: 0, weight: 0 }]);

  const slideInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const handleExerciseChange = (index: number, field: keyof Exercise, value: string | number) => {
    const newExercises = [...exercises];
    (newExercises[index][field] as any) = value;
    setExercises(newExercises);
  };

  const addExercise = () => {
    setExercises([...exercises, { name: '', sets: 0, reps: 0, weight: 0 }]);
  };

  const removeExercise = (index: number) => {
    const newExercises = exercises.filter((_, i) => i !== index);
    setExercises(newExercises);
  };

  const handleClearForm = () => {
    setWorkoutDate('');
    setWorkoutType('');
    setDuration('');
    setWorkoutNotes('');
    setExercises([{ name: '', sets: 0, reps: 0, weight: 0 }]);
    toast.info("Form cleared!");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const workoutData = {
      workoutDate,
      workoutType,
      duration,
      workoutNotes,
      exercises,
    };
    console.log("Logged Workout:", workoutData);
    toast.success("Workout logged successfully! (See console for data)");
    // In a real app, you would send this data to a backend API
    handleClearForm(); // Clear form after successful submission
    // navigate(-1); // Optionally go back to dashboard after logging
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden p-8">
      {/* Glowing background gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-[40%] right-[-20%] w-[700px] h-[700px] bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[30%] w-[500px] h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <Button
          variant="outline"
          className="bg-transparent text-foreground border-border hover:bg-white/10 hover:text-foreground mb-8"
          onClick={() => navigate(-1)} // Go back to the previous page (dashboard)
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
        </Button>

        <motion.h1
          className="text-4xl font-bold mb-8"
          variants={slideInUp}
          initial="hidden"
          animate="visible"
        >
          Log Your Workout <Dumbbell className="inline-block ml-2" />
        </motion.h1>

        <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
          <Card className="bg-white/5 border-border h-full">
            <CardHeader>
              <CardTitle className="text-foreground">Workout Details</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="workoutDate" className="text-muted-foreground">Date</Label>
                    <Input
                      id="workoutDate"
                      type="date"
                      value={workoutDate}
                      onChange={(e) => setWorkoutDate(e.target.value)}
                      className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="workoutType" className="text-muted-foreground">Workout Type</Label>
                    <Select onValueChange={setWorkoutType} value={workoutType} required>
                      <SelectTrigger className="bg-white/10 border-border text-foreground focus:border-primary">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-border text-foreground">
                        <SelectItem value="strength">Strength</SelectItem>
                        <SelectItem value="cardio">Cardio</SelectItem>
                        <SelectItem value="yoga">Yoga</SelectItem>
                        <SelectItem value="hiit">HIIT</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration" className="text-muted-foreground">Duration (minutes)</Label>
                    <Input
                      id="duration"
                      type="number"
                      value={duration}
                      onChange={(e) => setDuration(Number(e.target.value))}
                      className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Exercises</h3>
                  <div className="space-y-4">
                    {exercises.map((exercise, index) => (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end p-4 border-border rounded-md bg-white/5">
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor={`exercise-name-${index}`} className="text-muted-foreground">Exercise Name</Label>
                          <Input
                            id={`exercise-name-${index}`}
                            type="text"
                            value={exercise.name}
                            onChange={(e) => handleExerciseChange(index, 'name', e.target.value)}
                            className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                            placeholder="Bench Press"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`sets-${index}`} className="text-muted-foreground">Sets</Label>
                          <Input
                            id={`sets-${index}`}
                            type="number"
                            value={exercise.sets}
                            onChange={(e) => handleExerciseChange(index, 'sets', Number(e.target.value))}
                            className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                            min="1"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`reps-${index}`} className="text-muted-foreground">Reps</Label>
                          <Input
                            id={`reps-${index}`}
                            type="number"
                            value={exercise.reps}
                            onChange={(e) => handleExerciseChange(index, 'reps', Number(e.target.value))}
                            className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                            min="1"
                            required
                          />
                        </div>
                        <div className="space-y-2 flex items-end gap-2">
                          <div className="flex-grow">
                            <Label htmlFor={`weight-${index}`} className="text-muted-foreground">Weight (kg)</Label>
                            <Input
                              id={`weight-${index}`}
                              type="number"
                              value={exercise.weight}
                              onChange={(e) => handleExerciseChange(index, 'weight', Number(e.target.value))}
                              className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                              min="0"
                              required
                            />
                          </div>
                          {exercises.length > 1 && (
                            <Button type="button" variant="destructive" size="icon" onClick={() => removeExercise(index)} className="bg-red-600 hover:bg-red-700">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button type="button" variant="outline" className="mt-4 bg-transparent text-foreground border-border hover:bg-white/10 hover:text-foreground" onClick={addExercise}>
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Exercise
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workoutNotes" className="text-muted-foreground">Workout Notes</Label>
                  <Textarea
                    id="workoutNotes"
                    value={workoutNotes}
                    onChange={(e) => setWorkoutNotes(e.target.value)}
                    className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                    placeholder="Any additional notes about your workout..."
                    rows={4}
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-grow bg-gradient-to-r from-primary to-secondary text-foreground">
                    Save Workout
                  </Button>
                  <Button type="button" variant="outline" className="flex-grow bg-transparent text-foreground border-border hover:bg-white/10 hover:text-foreground" onClick={handleClearForm}>
                    <RotateCcw className="mr-2 h-4 w-4" /> Clear Form
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes animate-blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        .animate-blob {
          animation: animate-blob 7s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default SampleLogWorkout;


================================================================================
FILE PATH: frontend\src\pages\Workouts.tsx
================================================================================

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Trash2, Dumbbell, Calendar, Clock, Flame } from "lucide-react";
import Layout from "@/components/Layout";
import { toast } from "sonner";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { workoutService, Workout } from "@/services/workoutService";
import WorkoutChart from "@/components/workouts/WorkoutChart";
import { motion, AnimatePresence } from "framer-motion";

const Workouts = () => {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data: workouts = [], isLoading } = useQuery({
    queryKey: ['workouts'],
    queryFn: async () => {
      const res = await workoutService.getAll();
      return res;
    },
  });

  const createMutation = useMutation({
    mutationFn: workoutService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workouts'] });
      toast.success("Workout logged successfully!");
      setOpen(false);
    },
    onError: () => toast.error("Failed to log workout"),
  });

  const deleteMutation = useMutation({
    mutationFn: workoutService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workouts'] });
      toast.success("Workout deleted");
    },
    onError: () => toast.error("Failed to delete workout"),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newWorkout: Workout = {
      name: formData.get('name') as string,
      muscleGroup: formData.get('muscleGroup') as string,
      sets: Number(formData.get('sets')),
      reps: Number(formData.get('reps')),
      weight: Number(formData.get('weight')),
      duration: Number(formData.get('duration')),
      caloriesBurned: Number(formData.get('calories')),
      date: formData.get('date') as string,
    };

    createMutation.mutate(newWorkout);
  };

  const muscleGroups = ["Chest", "Back", "Legs", "Shoulders", "Arms", "Core", "Full Body"];

  return (
    <Layout>
      <div className="space-y-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-sm">
              Training Log
            </h1>
            <p className="text-muted-foreground mt-1">
              Track your progress and shatter your limits.
            </p>
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary text-black font-bold hover:bg-primary/90 shadow-neon transition-all hover:scale-105">
                <Plus className="w-4 h-4 mr-2" />
                Log Workout
              </Button>
            </DialogTrigger>
            <DialogContent className="glass-card border-white/10 text-white sm:max-w-xl backdrop-blur-xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Log New Session</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Input name="date" type="date" className="bg-black/40 border-white/10" required defaultValue={new Date().toISOString().split('T')[0]} />
                  </div>
                  <div className="space-y-2">
                    <Label>Exercise Name</Label>
                    <Input name="name" placeholder="e.g., Bench Press" className="bg-black/40 border-white/10" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Muscle Group</Label>
                    <Select name="muscleGroup" required>
                      <SelectTrigger className="bg-black/40 border-white/10">
                        <SelectValue placeholder="Select group" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/90 border-white/10">
                        {muscleGroups.map(g => <SelectItem key={g} value={g}>{g}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Sets</Label>
                    <Input name="sets" type="number" placeholder="4" min="1" className="bg-black/40 border-white/10" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Reps</Label>
                    <Input name="reps" type="number" placeholder="10" min="1" className="bg-black/40 border-white/10" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Weight (kg)</Label>
                    <Input name="weight" type="number" placeholder="80" min="0" step="0.5" className="bg-black/40 border-white/10" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Duration (min)</Label>
                    <Input name="duration" type="number" placeholder="45" min="1" className="bg-black/40 border-white/10" />
                  </div>
                  <div className="space-y-2">
                    <Label>Calories</Label>
                    <Input name="calories" type="number" placeholder="300" min="0" className="bg-black/40 border-white/10" />
                  </div>
                </div>
                <Button type="submit" disabled={createMutation.isPending} className="w-full bg-primary text-black font-bold hover:bg-primary/90 shadow-neon">
                  {createMutation.isPending ? "Saving..." : "Save Workout"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Analytics Chart */}
        {!isLoading && workouts.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <WorkoutChart workouts={workouts} />
          </motion.div>
        )}

        {/* Workout List */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {workouts.map((workout: any, index: number) => (
              <motion.div
                key={workout.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="glass-card p-5 rounded-2xl relative group hover:border-primary/30 transition-colors"
                layout
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary">
                      <Dumbbell className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white leading-tight">{workout.name}</h3>
                      <p className="text-xs text-primary font-medium">{workout.muscleGroup}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteMutation.mutate(workout.id)}
                    className="text-muted-foreground hover:text-red-400 hover:bg-red-500/10 -mt-1 -mr-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">{workout.sets}</span> sets × <span className="font-semibold text-white">{workout.reps}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">{workout.weight}kg</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" /> {workout.duration || 0} min
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame className="w-3 h-3 text-orange-400" /> {workout.caloriesBurned || 0} kcal
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-muted-foreground/60">
                  <Calendar className="w-3 h-3" />
                  {new Date(workout.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {!isLoading && workouts.length === 0 && (
            <div className="col-span-full py-20 text-center glass-card rounded-2xl">
              <Dumbbell className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
              <h3 className="text-xl font-semibold text-white">No workouts yet</h3>
              <p className="text-muted-foreground mt-2">Log your first session to start tracking!</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Workouts;


================================================================================
FILE PATH: frontend\src\pages\WorkoutsV2.tsx
================================================================================

import React, { useState } from "react";
import { motion } from "framer-motion";
import WorkoutToolbar from "../components/workouts/WorkoutToolbar";
import WorkoutList from "../components/workouts/WorkoutList";
import WorkoutDetailModal from "../components/workouts/WorkoutDetailModal";
import WorkoutChart from "../components/workouts/WorkoutChart";
import WorkoutFormModal from "../components/workouts/WorkoutFormModal"; // Import Form Modal
import "../styles/workouts.css";
// import { useCurrentUser } from "../hooks/useCurrentUser"; // Not strictly needed if API handles auth
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { workoutService, Workout } from "@/services/workoutService";
import { toast } from "sonner";

export default function WorkoutsV2() {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false); // State for Form Modal

  // Fetch Workouts
  const { data: workouts = [], isLoading } = useQuery({
    queryKey: ['workouts'],
    queryFn: workoutService.getAll,
  });

  // Delete Mutation
  const deleteMutation = useMutation({
    mutationFn: workoutService.delete,
    onSuccess: () => {
      toast.success("Workout deleted");
      queryClient.invalidateQueries({ queryKey: ['workouts'] });
      queryClient.invalidateQueries({ queryKey: ['dashboardSummary'] });
    },
    onError: () => toast.error("Failed to delete workout"),
  });

  // Filter Logic
  const filteredWorkouts = workouts.filter((workout: Workout) => {
    const matchesSearch = workout.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === "all" || workout.muscleGroup.toLowerCase().includes(filterType.toLowerCase());
    return matchesSearch && matchesFilter;
  });

  const handleSearch = (query: string) => setSearchQuery(query);
  const handleFilter = (filter: string) => setFilterType(filter);

  const handleNewWorkout = () => {
    setIsFormModalOpen(true);
  };

  const handleSelectWorkout = (workoutId: string) => {
    const workout = workouts.find((w: Workout) => w.id === workoutId);
    if (workout) {
      setSelectedWorkout(workout);
      setIsDetailModalOpen(true);
    }
  };

  const handleEditWorkout = (workoutId: string) => {
    // For now, reuse form modal or generic edit (Implement Edit later if complex)
    // To handle Edit properly, we'd pass 'selectedWorkout' to FormModal and set mode to 'edit'
    toast.info("Edit feature coming next!");
  };

  const handleDeleteWorkout = (workoutId: string) => {
    deleteMutation.mutate(workoutId);
  };

  // Pagination mock
  const handleLoadMore = () => { };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 md:p-8"
    >
      <WorkoutToolbar
        onSearch={handleSearch}
        onFilter={handleFilter}
        onNewWorkout={handleNewWorkout}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <WorkoutList
            workouts={filteredWorkouts}
            onSelect={handleSelectWorkout}
            onEdit={handleEditWorkout}
            onDelete={handleDeleteWorkout}
            loading={isLoading}
            onLoadMore={handleLoadMore}
            hasMore={false}
          />
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-1 hidden lg:block space-y-8"
        >
          <WorkoutChart workouts={workouts} />
        </motion.div>
      </div>

      <WorkoutDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        workout={selectedWorkout as any} // Temporary cast if detail modal types are strict
        onEdit={handleEditWorkout}
      />

      <WorkoutFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
      />
    </motion.div>
  );
}


================================================================================
FILE PATH: frontend\src\services\api.ts
================================================================================

const API_BASE_URL = '/api';

const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return token ? { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' };
};

export const api = {
    get: async (endpoint: string) => {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
        return response.json();
    },
    post: async (endpoint: string, data: any) => {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
        return response.json();
    },
    put: async (endpoint: string, data: any) => {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'PUT',
            headers: getAuthHeaders(),
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
        return response.json();
    },
    delete: async (endpoint: string) => {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'DELETE',
            headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
        return response.json(); // or just response if void
    }
};


================================================================================
FILE PATH: frontend\src\services\dashboardService.ts
================================================================================

import { api } from './api';

export interface DashboardSummary {
    workoutsThisWeek: number;
    caloriesToday: number;
    streakDays: number;
    energyLevel: string;
}

export const dashboardService = {
    getSummary: () => api.get('/dashboard/summary'),
};


================================================================================
FILE PATH: frontend\src\services\moodService.ts
================================================================================


import { api } from './api';

export interface MoodEntry {
    id?: string;
    userId?: string;
    mood: string; // Great, Good, Okay, Low, Bad
    energy: number; // 1-10
    notes?: string;
    date?: string;
}

export const moodService = {
    getAll: async (): Promise<MoodEntry[]> => {
        return api.get('/mood');
    },

    create: async (entry: MoodEntry): Promise<MoodEntry> => {
        return api.post('/mood', entry);
    },

    delete: async (id: string): Promise<void> => {
        await api.delete(`/mood/${id}`);
    }
};


================================================================================
FILE PATH: frontend\src\services\nutritionService.ts
================================================================================

import { api } from './api';

export interface Meal {
    id?: string;
    title: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    type: string;
    notes?: string;
    dateTime?: string;
}

export const nutritionService = {
    getAll: () => api.get('/meals'),
    create: (meal: Meal) => api.post('/meals', meal),
    update: (id: string, meal: Meal) => api.put(`/meals/${id}`, meal),
    delete: (id: string) => api.delete(`/meals/${id}`),
};


================================================================================
FILE PATH: frontend\src\services\progressService.ts
================================================================================

import { api } from './api';

export interface ProgressSummary {
    totalWorkouts: number;
    totalCaloriesBurned: number;
    longestStreak: number;
    avgEchoScore: number;
}

export interface TrendPoint {
    date: string;
    score: number;
}

export interface PersonalRecord {
    id: string;
    name: string;
    date: string;
    value: number;
    unit: string;
}

export const progressService = {
    getSummary: async (): Promise<ProgressSummary> => {
        return api.get('/progress/summary');
    },
    getTrend: async (): Promise<TrendPoint[]> => {
        return api.get('/progress/trend');
    },
    getRecords: async (): Promise<PersonalRecord[]> => {
        return api.get('/progress/records');
    }
};


================================================================================
FILE PATH: frontend\src\services\userService.ts
================================================================================


import { api } from './api';

export interface UserProfile {
    id: string;
    name: string;
    email: string;
    age: number;
    height_cm: number;
    weight_kg: number;
    goal: string;
    gender: string;
}

export const userService = {
    getProfile: async (): Promise<UserProfile> => {
        const response = await api.get('/users/profile');
        return response; // Backend returns User object directly
    },
    updateProfile: async (user: UserProfile): Promise<UserProfile> => {
        const response = await api.put('/users/profile', user);
        return response;
    }
};


================================================================================
FILE PATH: frontend\src\services\workoutService.ts
================================================================================

import { api } from './api';

export interface Workout {
    id?: string;
    name: string;
    muscleGroup: string;
    sets: number;
    reps: number;
    weight: number;
    duration?: number;
    caloriesBurned?: number;
    notes?: string;
    date?: string;
}

export const workoutService = {
    getAll: () => api.get('/workouts'),
    create: (workout: Workout) => api.post('/workouts', workout),
    update: (id: string, workout: Workout) => api.put(`/workouts/${id}`, workout),
    delete: (id: string) => api.delete(`/workouts/${id}`),
};


================================================================================
FILE PATH: frontend\src\styles\auth.css
================================================================================


.auth-neon-gradient {
  background: linear-gradient(45deg, rgba(0,255,209,0.1), rgba(124,58,237,0.1));
  filter: blur(100px);
  position: absolute;
  inset: -20%;
  animation: neonPulseBackground 15s infinite alternate;
  z-index: 0;
}

@keyframes neonPulseBackground {
  0% { transform: scale(1) rotate(0deg); opacity: 0.8; }
  50% { transform: scale(1.1) rotate(5deg); opacity: 0.9; }
  100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
}

.auth-card-glow {
  box-shadow: 0 0 30px rgba(0,255,209,0.15), 0 0 60px rgba(124,58,237,0.1);
  border: 1px solid rgba(0,255,209,0.1);
}

.auth-input-glow:focus-within {
  box-shadow: 0 0 0 2px rgba(0,255,209,0.5), 0 0 10px rgba(0,255,209,0.3);
  border-color: #00ffd1;
}

.auth-button-glow {
  background: linear-gradient(90deg, #00ffd1, #7c3aed);
  color: #000;
  font-weight: 600;
  transition: all 0.3s ease;
}

.auth-button-glow:hover {
  box-shadow: 0 0 20px rgba(0,255,209,0.4), 0 0 40px rgba(124,58,237,0.3);
  transform: translateY(-2px);
}


================================================================================
FILE PATH: frontend\src\styles\dashboard.css
================================================================================


@keyframes slideGradient {
  0% { transform: translateX(-40%) rotate(-10deg); opacity: .9; }
  50% { transform: translateX(40%) rotate(-10deg); opacity: .95; }
  100% { transform: translateX(-40%) rotate(-10deg); opacity: .9; }
}

.hero-gradient {
  position: absolute;
  inset: -20%;
  background: linear-gradient(120deg, rgba(0,255,220,0.08), rgba(150,70,255,0.06), rgba(0,0,0,0));
  filter: blur(40px);
  animation: slideGradient 18s linear infinite;
  pointer-events: none;
  z-index: 0;
}

.card-glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

.focus-outline {
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition: outline-color 0.2s ease-in-out;
}

.focus-outline:focus-visible {
  outline-color: #00f5d4;
}


================================================================================
FILE PATH: frontend\src\styles\mood.css
================================================================================


.mood-neon {
  box-shadow: 0 8px 24px rgba(0,255,220,0.06);
  border: 1px solid rgba(0,255,220,0.06);
}
 @keyframes neonPulse {
  0% { box-shadow: 0 6px 18px rgba(0,255,220,0.04); }
  50% { box-shadow: 0 12px 40px rgba(0,255,220,0.08); }
  100% { box-shadow: 0 6px 18px rgba(0,255,220,0.04); }
}
.mood-animated { animation: neonPulse 4s ease-in-out infinite; }


================================================================================
FILE PATH: frontend\src\styles\nutrition.css
================================================================================


.nutrition-neon {
  box-shadow: 0 8px 36px rgba(0,255,220,0.06);
  border:1px solid rgba(0,255,220,0.06);
}
 @keyframes neonPulse {
  0%{box-shadow:0 4px 14px rgba(0,255,220,0.03);}
  50%{box-shadow:0 12px 40px rgba(0,255,220,0.08);}
  100%{box-shadow:0 4px 14px rgba(0,255,220,0.03);}
}
.nutrition-animated { animation: neonPulse 4s ease-in-out infinite; }


================================================================================
FILE PATH: frontend\src\styles\profile.css
================================================================================


.profile-neon {
  box-shadow: 0 8px 32px rgba(0,255,209,0.05);
  border: 1px solid rgba(0,255,209,0.04);
}
.profile-avatar {
  background: linear-gradient(135deg, #00ffd1, #7c3aed);
  box-shadow: 0 0 20px rgba(0,255,209,0.2);
}
.btn-neon {
  background: linear-gradient(90deg, #00ffd1, #7c3aed);
  color: #000;
  font-weight: 600;
  border-radius: 0.5rem;
  box-shadow: 0 8px 24px rgba(0,255,209,0.1);
  transition: all 0.25s ease;
}
.btn-neon:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 36px rgba(0,255,209,0.2);
}


================================================================================
FILE PATH: frontend\src\styles\progress.css
================================================================================


.progress-neon {
  box-shadow: 0 8px 40px rgba(0,255,220,0.05);
  border: 1px solid rgba(0,255,220,0.04);
}
.progress-glow {
  background: linear-gradient(90deg, rgba(0,255,220,0.04), rgba(128,0,255,0.02));
}


================================================================================
FILE PATH: frontend\src\styles\workouts.css
================================================================================


.workout-neon {
  box-shadow: 0 6px 24px rgba(0,255,220,0.06), 0 2px 6px rgba(150,70,255,0.04);
  border: 1px solid rgba(0,255,220,0.06);
}
 @keyframes neonPulse {
  0% { box-shadow: 0 6px 18px rgba(0,255,220,0.04); }
  50% { box-shadow: 0 10px 36px rgba(0,255,220,0.08); }
  100% { box-shadow: 0 6px 18px rgba(0,255,220,0.04); }
}
.workout-animated-accent { animation: neonPulse 4s ease-in-out infinite; }


================================================================================
FILE PATH: frontend\src\vite-env.d.ts
================================================================================

/// <reference types="vite/client" />


================================================================================
FILE PATH: frontend\tailwind.config.ts
================================================================================

import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;


================================================================================
FILE PATH: frontend\tsconfig.app.json
================================================================================

{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": [
      "ES2020",
      "DOM",
      "DOM.Iterable"
    ],
    "module": "ESNext",
    "skipLibCheck": true,
    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    /* Linting */
    "strict": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noImplicitAny": false,
    "noFallthroughCasesInSwitch": false,
    "esModuleInterop": true,
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  },
  "include": [
    "src"
  ]
}

================================================================================
FILE PATH: frontend\tsconfig.json
================================================================================

{
  "files": [],
  "references": [{ "path": "./tsconfig.app.json" }, { "path": "./tsconfig.node.json" }],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "noImplicitAny": false,
    "noUnusedParameters": false,
    "skipLibCheck": true,
    "allowJs": true,
    "noUnusedLocals": false,
    "strictNullChecks": false
  }
}


================================================================================
FILE PATH: frontend\tsconfig.node.json
================================================================================

{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}


================================================================================
FILE PATH: frontend\vite.config.ts
================================================================================

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8081",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));


================================================================================
FILE PATH: package.json
================================================================================

{
    "name": "echobody-root",
    "private": true,
    "scripts": {
        "start:all": "concurrently \"npm run start:backend\" \"npm run start:frontend\"",
        "start:backend": "cd backend && mvnw spring-boot:run",
        "start:frontend": "cd frontend && npm run dev",
        "install:all": "npm install && cd frontend && npm install"
    },
    "devDependencies": {
        "concurrently": "^8.2.2"
    }
}

================================================================================
FILE PATH: tsconfig.json
================================================================================

{
    "files": [],
    "references": [
        {
            "path": "./frontend"
        }
    ]
}
