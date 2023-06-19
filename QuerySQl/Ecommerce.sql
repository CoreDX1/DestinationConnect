-- TODO: Tabla de alojamientos

create table Lodging(
    Id SERIAL PRIMARY KEY,
    Locality VARCHAR(50),
    Date_start DATE,
    Date_end DATE,
    Rooms INTEGER,
    Capacity INTEGER,
    State INTEGER,
    Price INTEGER,
    Description TEXT,
    Lodging_type VARCHAR(50),
    Rating INTEGER
);

-- TODO : Table the Lodging
INSERT INTO Lodging (locality, date_start, date_end, rooms, capacity, state, price, description, lodging_type, rating)
VALUES
    ('New York City', '2023-06-01', '2023-06-05', 2, 4, 1, 1150, 'A cozy apartment in the heart of Manhattan', 'Apartment', 4),
    ('Miami', '2023-07-10', '2023-07-15', 1, 2, 1, 1150, 'A charming studio with a view of the beach', 'Apartment', 5),
    ('Las Vegas', '2023-08-20', '2023-08-25', 3, 6, 1, 1350, 'A spacious suite in a luxurious hotel on the Strip', 'Hotel', 3),
    ('Los Angeles', '2023-09-01', '2023-09-10', 2, 4, 1, 1200, 'A modern apartment in Hollywood', 'Apartment', 4),
    ('San Francisco', '2023-10-15', '2023-10-20', 1, 2, 1, 1300, 'A luxurious hotel room in Union Square', 'Hotel', 5),
    ('Seattle', '2023-06-15', '2023-06-20', 1, 2, 1, 1304, 'Modern studio in the vibrant Capitol Hill neighborhood, with access to a rooftop deck', 'Apartment', 4),
    ('Chicago', '2023-07-01', '2023-07-05', 2, 4, 1, 1500, 'Spacious apartment in the historic Loop district, steps away from Millennium Park and the Art Institute of Chicago', 'Apartment', 4.6),
    ('San Diego', '2023-08-10', '2023-08-15', 1, 2, 1, 2500, 'Cozy studio in the trendy Gaslamp Quarter, with access to a rooftop pool and hot tub', 'Apartment', 5),
    ('Orlando', '2023-09-01', '2023-09-10', 2, 4, 1, 200, 'Family-friendly condo near Walt Disney World, with a fully equipped kitchen and access to a community pool', 'Apartment', 4.5),
    ('New Orleans', '2023-10-01', '2023-10-05', 1, 2, 1, 125, 'Charming studio in the French Quarter, with exposed brick walls and a private balcony', 'Apartment', 4),
    ('Denver', '2023-11-15', '2023-11-20', 1, 1, 1, 525, 'Sleek apartment in the trendy RiNo district, with access to a rooftop lounge and BBQ area', 'Apartment', 1),
    ('Portland', '2023-12-01', '2023-12-05', 1, 2, 0, 1125, 'Quirky tiny house in the Alberta Arts District, with a loft bed and a cozy outdoor seating area', 'Apartment', 2),
    ('Nashville', '2024-01-15', '2024-01-20', 2, 4, 0, 1200, 'Spacious loft in the vibrant Gulch neighborhood, with high ceilings and a fully equipped kitchen', 'Apartment', 4),
    ('Austin', '2024-02-01', '2024-02-05', 1, 2, 1, 1175, 'Eclectic studio in the heart of South Congress, with access to a communal courtyard and BBQ area', 'Apartment', 4),
    ('San Antonio', '2024-03-01', '2024-03-05', 2, 4, 1, 1225, 'Traditional casita in the historic King William district, with a private courtyard and garden', 'Apartment', 4),
    ('Boston', '2024-04-15', '2024-04-20', 1, 2, 1, 1175, 'Cozy apartment in the charming Beacon Hill neighborhood, with exposed brick walls and a fireplace', 'Apartment', 4);

INSERT INTO Lodging (locality, date_start, date_end, rooms, capacity, state, price, description, lodging_type, rating)
VALUES 
('New York City', '2023-06-01', '2023-06-10', 2, 1, 1, 1150, 'A cozy apartment in the heart of Manhattan', 'Hotel', 1),
('Chicago', '2023-06-01', '2023-06-13', 1, 1, 1, 1150, 'A cozy apartment in the heart of Manhattan', 'Hotel', 2),
('Los Angeles', '2023-06-01', '2023-06-15', 2, 1, 1, 1150, 'A cozy apartment in the heart of Manhattan', 'Hotel', 3),
('San Diego', '2023-06-01', '2023-06-30', 1, 1, 1, 1150, 'A cozy apartment in the heart of Manhattan', 'Hotel', 4),
('Orlando', '2023-06-01', '2023-06-10', 1, 2, 1, 2100, 'A cozy room in a 1-star hotel near Disney World, with basic amenities', 'Hotel', 2),
('Austin', '2023-06-01', '2023-06-13', 1, 1, 1, 1070, 'A simple and comfortable room in a 2-star hotel, located near downtown Austin', 'Hotel', 3),
('Phoenix', '2023-06-01', '2023-06-15', 2, 4, 1, 1120, 'A spacious room with a balcony in a 3-star hotel in Phoenix, with a fitness center and pool access', 'Hotel', 4),('New Orleans', '2023-06-01', '2023-06-30', 1, 2, 1, 90, 'A charming room in a 1-star hotel in the historic French Quarter, with a courtyard and free breakfast', 'Hotel', 3),
('Miami', '2023-06-01', '2023-06-10', 1, 1, 1, 750, 'A cozy room in a beachfront hotel in Miami, with ocean views', 'Hotel', 2),
('Las Vegas', '2023-06-01', '2023-06-13', 2, 2, 1, 1600, 'A luxurious suite in a 5-star hotel on the Las Vegas Strip, with a spa and casino access', 'Hotel', 5),
('San Francisco', '2023-06-01', '2023-06-15', 1, 1, 1, 900, 'A modern studio in a 4-star hotel in downtown San Francisco, with free Wi-Fi', 'Hotel', 4),
('Boston', '2023-06-01', '2023-06-30', 2, 3, 1, 2200, 'A spacious suite in a 5-star hotel in Boston, with a view of the harbor', 'Hotel', 5),
('Seattle', '2023-06-01', '2023-06-10', 1, 1, 1, 800, 'A cozy room in a 3-star hotel near the Space Needle, with a restaurant and bar', 'Hotel', 3),
('Denver', '2023-06-01', '2023-06-13', 1, 2, 1, 1100, 'A comfortable room in a 4-star hotel in downtown Denver, with a fitness center and pool', 'Hotel', 4),
('Portland', '2023-06-01', '2023-06-15', 2, 4, 1, 1300, 'A spacious suite in a 5-star hotel in Portland, with a rooftop bar and restaurant', 'Hotel', 5),
('Nashville', '2023-06-01', '2023-06-30', 1, 1, 1, 750, 'A cozy room in a 2-star hotel near the Country Music Hall of Fame, with free breakfast', 'Hotel', 2),
('San Antonio', '2023-06-01', '2023-06-10', 1, 2, 1, 950, 'A comfortable room in a 3-star hotel in downtown San Antonio, with a pool and restaurant', 'Hotel', 3),
('Asheville', '2023-06-01', '2023-06-13', 1, 1, 1, 600, 'A cozy room in a bed and breakfast in Asheville, with a garden and mountain views', 'Bed and Breakfast', 2),
('Charleston', '2023-06-01', '2023-06-15', 1, 1, 1, 800, 'A charming room in a historic inn in Charleston, with a courtyard and free Wi-Fi', 'Bed and Breakfast', 3),
('Savannah', '2023-06-01', '2023-06-30', 1, 2, 1, 1100, 'A spacious suite in a romantic bed and breakfast in Savannah, with a garden and wine reception', 'Bed and Breakfast', 4),('Nashville', '2023-06-01', '2023-06-10', 1, 1, 1, 700, 'A cozy room in a 2-star hotel near the Grand Ole Opry', 'Hotel', 2),
('Denver', '2023-06-01', '2023-06-13', 2, 3, 1, 1500, 'A spacious suite in a 3-star hotel in the heart of Denver, with mountain views and a rooftop bar', 'Hotel', 4),
('Seattle', '2023-06-01', '2023-06-15', 1, 2, 1, 1200, 'A comfortable room in a 4-star hotel near the Space Needle, with a restaurant and spa', 'Hotel', 4),
('Miami', '2023-06-01', '2023-06-30', 2, 4, 1, 2500, 'A luxurious suite with ocean views in a 5-star hotel on Miami Beach, with a pool and private beach access', 'Hotel', 5),
('San Francisco', '2023-06-01', '2023-06-10', 1, 1, 1, 900, 'A stylish room in a boutique hotel in Union Square, with a rooftop terrace and complimentary breakfast', 'Hotel', 3),
('Las Vegas', '2023-06-01', '2023-06-13', 2, 2, 1, 1200, 'A spacious suite in a 4-star hotel on the Las Vegas Strip, with a casino and multiple dining options', 'Hotel', 4),
('Portland', '2023-06-01', '2023-06-15', 1, 1, 1, 800, 'A cozy room in a budget-friendly 1-star hotel near the Portland Art Museum', 'Hotel', 2),
('Houston', '2023-06-01', '2023-06-30', 2, 3, 1, 1300, 'A modern suite in a 3-star hotel in downtown Houston, with a fitness center and restaurant', 'Hotel', 4),
('Philadelphia', '2023-06-01', '2023-06-10', 1, 2, 1, 1000, 'A comfortable room in a 4-star hotel near Independence Hall, with a fitness center and on-site restaurant', 'Hotel', 3),
('San Antonio', '2023-06-01', '2023-06-13', 1, 1, 1, 800, 'A cozy room in a 2-star hotel near the Alamo, with free breakfast and parking', 'Hotel', 2),
('Boston', '2023-06-01', '2023-06-15', 2, 4, 1, 2200, 'A spacious suite in a historic 5-star hotel in the heart of Boston, with a rooftop bar and fine dining restaurant', 'Hotel', 5),
('Atlanta', '2023-06-01', '2023-06-30', 1, 1, 1, 900, 'A stylish room in a boutique hotel in the Buckhead district, with a rooftop pool and complimentary breakfast', 'Hotel', 3),

-- TODO: Miami
INSERT INTO lodging (locality, date_start, date_end, rooms, capacity, state, price, description, lodging_type, rating) 
VALUES 
('Miami', '2023-05-01', '2023-05-05', 1, 2, 1, 1000, 'Cozy studio apartment', 'Apartment', 1),
('Miami', '2023-06-10', '2023-06-15', 3, 6, 1, 1300, 'Spacious villa with private pool', 'Apartment', 2),
('Miami', '2023-07-20', '2023-07-27', 2, 4, 1, 1200, 'Luxury oceanfront suite', 'Hotel', 3),
('Miami', '2023-08-05', '2023-08-15', 2, 4, 1, 1180, 'Modern loft in downtown Miami', 'Apartment', 4),
('Miami', '2023-09-01', '2023-09-07', 1, 2, 1, 1100, 'Charming cottage near the beach', 'Hotel', 5),
('Miami', '2023-10-01', '2023-10-07', 1, 2, 1, 950, 'Beautifully decorated apartment in Little Havana', 'Apartment', 1),
('Miami', '2023-11-15', '2023-11-20', 2, 4, 1, 1150, 'Spacious condo with city views', 'Hotel', 2),
('Miami', '2023-12-10', '2023-12-20', 3, 6, 1, 1280, 'Private villa with pool and beach access', 'Apartment', 3),
('Miami', '2023-01-05', '2023-01-10', 1, 2, 1, 1880, 'Cozy studio with ocean views', 'Hotel', 4),
('Miami', '2023-02-01', '2023-02-05', 2, 4, 1, 1020, 'Bright and airy apartment near South Beach', 'Apartment', 5),
('Miami', '2023-03-10', '2023-03-15', 2, 4, 1, 1180, 'Luxury suite in a boutique hotel', 'Hotel', 1),
('Miami', '2023-04-01', '2023-04-07', 1, 2, 1, 3000, 'Quaint cottage with a garden oasis', 'Apartment', 2),
('Miami', '2023-05-15', '2023-05-20', 3, 6, 1, 1300, 'Stylish villa with panoramic views', 'Hotel', 3),
('Miami', '2023-06-10', '2023-06-15', 2, 4, 1, 1200, 'Chic loft in the heart of Wynwood', 'Apartment', 4),
('Miami', '2023-07-20', '2023-07-27', 2, 4, 1, 1250, 'Luxury apartment in a high-rise building', 'Hotel', 5),
('Miami', '2023-08-05', '2023-08-15', 3, 6, 1, 1350, 'Elegant villa with a private pool and spa', 'Apartment', 1),
('Miami', '2023-09-01', '2023-09-07', 1, 2, 1, 1990, 'Charming studio near the Design District', 'Hotel', 2),
('Miami', '2023-10-15', '2023-10-20', 2, 4, 1, 1150, 'Modern condo with bay views', 'Apartment', 3),
('Miami', '2023-11-10', '2023-11-20', 3, 6, 1, 1280, 'Secluded villa with a private beach', 'hotel', 4),
('Miami', '2023-12-05', '2023-12-10', 1, 2, 1, 1080, 'Cozy apartment in a historic building', 'Apartment', 5),
('Miami', '2023-01-01', '2023-01-05', 2, 4, 1, 2120, 'Beachfront condo with stunning ocean views', 'Hotel', 1),
('Miami', '2023-02-10', '2023-02-15', 1, 2, 1, 1100, 'Cozy cottage in the heart of Coconut Grove', 'Apartment', 2),
('Miami', '2023-03-05', '2023-03-10', 2, 4, 1, 2180, 'Charming apartment with a private balcony', 'Hotel', 3),
('Miami', '2023-04-15', '2023-04-20', 3, 6, 1, 2300, 'Luxury villa with a rooftop terrace', 'Apartment', 4),
('Miami', '2023-05-10', '2023-05-15', 2, 4, 1, 2150, 'Modern loft with city views', 'Hotel', 5),
('Miami', '2023-06-20', '2023-06-27', 2, 4, 1, 2250, 'Spacious apartment in a resort-style complex', 'Apartment', 1),
('Miami', '2023-07-05', '2023-07-15', 3, 6, 1, 2350, 'Stylish villa with a private pool and outdoor kitchen', 'Hotel', 2),
('Miami', '2023-08-01', '2023-08-07', 1, 2, 1, 3900, 'Bright studio in a trendy neighborhood', 'Apartment', 3),
('Miami', '2023-09-15', '2023-09-20', 2, 4, 1, 1020, 'Elegant condo with panoramic bay views', 'Hotel', 4),
('Miami', '2023-10-10', '2023-10-20', 3, 6, 1, 2080, 'Private villa with a tropical garden', 'Apartment', 5);

create table UserRol(
    id SERIAL PRIMARY KEY,
    rol VARCHAR(50)
    id_user INTEGER,
);
