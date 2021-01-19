-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost:3306
-- Thời gian đã tạo: Th1 19, 2021 lúc 11:16 AM
-- Phiên bản máy phục vụ: 8.0.22-0ubuntu0.20.04.3
-- Phiên bản PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `quiz`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(3, 'toan', '2021-01-07 00:49:16', '2021-01-07 00:49:16'),
(11, 'tieng anh', '2021-01-15 00:14:19', '2021-01-15 00:14:19'),
(13, 'Đề thi tổng hợp', '2021-01-18 00:54:59', '2021-01-18 00:54:59');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category_quiz`
--

CREATE TABLE `category_quiz` (
  `category_id` int UNSIGNED NOT NULL,
  `quiz_id` int UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `category_quiz`
--

INSERT INTO `category_quiz` (`category_id`, `quiz_id`, `created_at`, `updated_at`) VALUES
(3, 15, '2021-01-18 00:00:18', '2021-01-18 00:00:18'),
(3, 16, '2021-01-18 00:00:18', '2021-01-18 00:00:18'),
(3, 17, '2021-01-18 00:00:19', '2021-01-18 00:00:19'),
(3, 18, '2021-01-18 00:00:19', '2021-01-18 00:00:19'),
(3, 19, '2021-01-18 00:00:19', '2021-01-18 00:00:19'),
(3, 20, '2021-01-18 00:00:20', '2021-01-18 00:00:20'),
(3, 22, '2021-01-18 00:00:22', '2021-01-18 00:00:22'),
(3, 23, '2021-01-18 00:00:23', '2021-01-18 00:00:23'),
(3, 24, '2021-01-18 00:00:23', '2021-01-18 00:00:23'),
(3, 25, '2021-01-18 00:08:33', '2021-01-18 00:08:33'),
(13, 15, '2021-01-18 00:55:06', '2021-01-18 00:55:06'),
(13, 16, '2021-01-18 00:55:07', '2021-01-18 00:55:07'),
(13, 17, '2021-01-18 00:55:08', '2021-01-18 00:55:08'),
(13, 18, '2021-01-18 00:55:08', '2021-01-18 00:55:08'),
(13, 19, '2021-01-18 00:55:09', '2021-01-18 00:55:09'),
(13, 20, '2021-01-18 00:55:10', '2021-01-18 00:55:10'),
(13, 22, '2021-01-18 00:55:17', '2021-01-18 00:55:17'),
(13, 23, '2021-01-18 00:55:19', '2021-01-18 00:55:19'),
(13, 24, '2021-01-18 00:55:19', '2021-01-18 00:55:19'),
(13, 25, '2021-01-18 00:55:21', '2021-01-18 00:55:21');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2021_01_05_064053_create_categories_table', 2),
(5, '2021_01_05_080804_create_quizzes_table', 3),
(6, '2021_01_05_081355_create_roles_table', 4),
(7, '2021_01_05_081522_create_role_user_table', 5),
(8, '2021_01_05_082049_create_results_table', 6),
(9, '2021_01_16_130623_create_category_quiz_table', 7);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `quizzes`
--

CREATE TABLE `quizzes` (
  `id` int UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `text` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `option1` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `option2` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `option3` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `option4` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `correctAnswer` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `quizzes`
--

INSERT INTO `quizzes` (`id`, `title`, `text`, `option1`, `option2`, `option3`, `option4`, `correctAnswer`, `created_at`, `updated_at`) VALUES
(15, 'Tìm đáp án đúng', 'Căn bậc hai số học của\n(-3)^2    là:', '-3', '3', '-81', '81', '3', '2021-01-17 23:24:58', '2021-01-17 23:24:58'),
(16, 'Tìm đáp án đúng', 'Căn bậc hai số học của\n5^2 - 3^2  là:', '16', '4', '-4', '5', '16', '2021-01-17 23:28:11', '2021-01-17 23:28:11'),
(17, 'Tìm đáp án đúng', '. Căn bậc ba của -125 là:', '5', '-5', '25', '-25', '-5', '2021-01-17 23:29:30', '2021-01-17 23:29:30'),
(18, 'Tìm đáp án đúng', '. Số có căn bậc hai số học bằng 9 là:', '3', '-3', '81', '-81', '3', '2021-01-17 23:34:42', '2021-01-17 23:34:42'),
(19, 'Tìm đáp án đúng', 'Tìm kế quả của phép tính  1000 : 8 =?', '150', '125', '250', '225', '125', '2021-01-17 23:42:20', '2021-01-17 23:42:20'),
(20, 'Tìm đáp án đúng', 'Tìm kết quả của phép tính 5^4', '100', '20', '125', '625', '625', '2021-01-17 23:48:35', '2021-01-17 23:48:35'),
(22, 'Số tiếp theo trong dãy số dưới đây là số mấy ?', '5, 16, 49, 104, ?', '176', '181', '192', '200', '181', '2021-01-17 23:52:33', '2021-01-17 23:52:33'),
(23, 'Tìm đáp án đúng', '11^2 = ?', '22', '32', '121', '111', '121', '2021-01-17 23:58:51', '2021-01-17 23:58:51'),
(24, 'Tìm đáp án đúng', '3 : 4 = ?', '3,4', '0,5', '0,75', '1,25', '0,75', '2021-01-18 00:00:12', '2021-01-18 00:00:12'),
(25, 'Tìm đáp án sai', '1000+100+10 = ?', '1100', '1110', '1111', '1120', '1110', '2021-01-18 00:03:28', '2021-01-18 00:58:28');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `results`
--

CREATE TABLE `results` (
  `id` int UNSIGNED NOT NULL,
  `user_id` int UNSIGNED NOT NULL,
  `category_id` int UNSIGNED NOT NULL,
  `point` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `results`
--

INSERT INTO `results` (`id`, `user_id`, `category_id`, `point`, `created_at`, `updated_at`) VALUES
(1, 29, 3, 5, '2021-01-14 23:44:49', '2021-01-14 23:44:49'),
(2, 29, 3, 5, '2021-01-14 23:46:59', '2021-01-14 23:46:59'),
(3, 29, 3, 0, '2021-01-14 23:47:16', '2021-01-14 23:47:16'),
(4, 29, 3, 1, '2021-01-14 23:47:59', '2021-01-14 23:47:59'),
(5, 29, 3, 4, '2021-01-14 23:48:17', '2021-01-14 23:48:17'),
(6, 29, 3, 2, '2021-01-14 23:48:29', '2021-01-14 23:48:29'),
(7, 44, 3, 4, '2021-01-15 00:25:22', '2021-01-15 00:25:22'),
(8, 29, 3, 0, '2021-01-17 18:31:13', '2021-01-17 18:31:13'),
(9, 29, 3, 0, '2021-01-17 18:31:22', '2021-01-17 18:31:22'),
(10, 29, 3, 1, '2021-01-17 18:31:55', '2021-01-17 18:31:55'),
(11, 29, 3, 2, '2021-01-17 18:32:05', '2021-01-17 18:32:05'),
(12, 29, 3, 1, '2021-01-17 18:34:01', '2021-01-17 18:34:01'),
(13, 29, 3, 1, '2021-01-17 18:34:10', '2021-01-17 18:34:10'),
(14, 29, 3, 2, '2021-01-17 18:34:16', '2021-01-17 18:34:16'),
(15, 29, 3, 1, '2021-01-17 18:34:49', '2021-01-17 18:34:49'),
(17, 29, 3, 1, '2021-01-17 18:37:41', '2021-01-17 18:37:41'),
(18, 29, 3, 1, '2021-01-17 18:39:44', '2021-01-17 18:39:44'),
(22, 29, 3, 1, '2021-01-17 20:45:10', '2021-01-17 20:45:10'),
(26, 29, 3, 1, '2021-01-17 20:47:58', '2021-01-17 20:47:58'),
(29, 29, 3, 1, '2021-01-17 20:53:31', '2021-01-17 20:53:31'),
(30, 29, 3, 1, '2021-01-17 20:54:02', '2021-01-17 20:54:02'),
(56, 29, 3, 0, '2021-01-18 00:05:53', '2021-01-18 00:05:53'),
(57, 29, 3, 8, '2021-01-18 00:07:09', '2021-01-18 00:07:09'),
(58, 29, 3, 8, '2021-01-18 00:19:10', '2021-01-18 00:19:10'),
(59, 29, 3, 0, '2021-01-18 00:25:03', '2021-01-18 00:25:03'),
(60, 45, 3, 7, '2021-01-18 00:48:50', '2021-01-18 00:48:50');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roles`
--

CREATE TABLE `roles` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'admin', NULL, NULL),
(2, 'user', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `role_user`
--

CREATE TABLE `role_user` (
  `role_id` int UNSIGNED NOT NULL,
  `user_id` int UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `role_user`
--

INSERT INTO `role_user` (`role_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 25, NULL, NULL),
(1, 26, NULL, NULL),
(1, 27, NULL, NULL),
(2, 11, NULL, NULL),
(2, 19, NULL, NULL),
(2, 29, NULL, NULL),
(2, 30, NULL, NULL),
(2, 31, NULL, NULL),
(2, 32, NULL, NULL),
(2, 33, NULL, NULL),
(2, 34, NULL, NULL),
(2, 35, NULL, NULL),
(2, 36, NULL, NULL),
(2, 37, NULL, NULL),
(2, 38, NULL, NULL),
(2, 39, NULL, NULL),
(2, 40, NULL, NULL),
(2, 41, NULL, NULL),
(2, 42, NULL, NULL),
(2, 43, NULL, NULL),
(2, 44, NULL, NULL),
(2, 45, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(11, 'trong9', 'trong9@gmail.com', NULL, '$2y$10$PaOkXnQOAuak7LF7NEuJUuii9iv37oYFCRMG7Io4TFcjnNRiv0boW', NULL, '2021-01-07 21:24:36', '2021-01-13 20:17:38'),
(19, 'trong8', 'trong8@gmail.com', NULL, '$2y$10$9Dgoy9QJbdIMmipyb9A0COWadCU5GlNeMJglsZthL7wyYmibJfHn.', NULL, '2021-01-08 01:20:36', '2021-01-08 01:20:36'),
(25, 'trong2', 'trong2@gmail.com', NULL, '$2y$10$5k7dcLGez.6h2XEkL/xImefFbzPj5kML.lHiEAev5i0vuWFJckMYC', NULL, '2021-01-08 02:09:25', '2021-01-08 02:09:25'),
(26, 'trong10', 'trong10@gmail.com', NULL, '$2y$10$m8K/lBbAYTFB6rLMjjh..el55JOTvieZ1mFpko5UCrKmJVGxSImAe', NULL, '2021-01-10 09:36:27', '2021-01-10 09:36:27'),
(27, 'trong11', 'trong11@gmail.com', NULL, '$2y$10$X7EPM4p0p8MimExATNETJe.s2gAsGhvvM3lGZpeAVPWJQNt1ufqB6', NULL, '2021-01-10 09:43:56', '2021-01-10 09:43:56'),
(28, 'trong12', 'trong12@gmail.com', NULL, '$2y$10$WoEDthE2VgVd3O0hjx6AQOUrQR.MvhEQyl710APftzEb/wZEkqG9i', NULL, '2021-01-10 17:58:42', '2021-01-10 17:58:42'),
(29, 'trong13', 'trong13@gmail.com', NULL, '$2y$10$7b7eiW1nRUPpp/8dEQSJXu3/Jt7xynrnCyCyXz4B5NlQMkqPNSi.2', NULL, '2021-01-10 18:06:33', '2021-01-10 18:06:33'),
(30, 'trong1', 'trong1@gmail.com', NULL, '$2y$10$kByE4T4ZrLxRvK1y3BhEk.w6xW2Q5irgSZeyDH8C3rTsSfOpl48le', NULL, '2021-01-10 18:08:38', '2021-01-10 18:08:38'),
(31, 'trong14', 'trong14@gmail.com', NULL, '$2y$10$JYxzG8KjvkPUziW15oIznu/ePk1sbujjK.SlVdwoTkh4tDx93pXM6', NULL, '2021-01-10 18:11:06', '2021-01-10 18:11:06'),
(32, 'trong15', 'trong15@gmail.com', NULL, '$2y$10$4WYjeQxKipQ0ecaC/PK.zeDaUf.kIS3Sf9bxKmLiPy/9xDRxg45.6', NULL, '2021-01-10 18:12:04', '2021-01-10 18:12:04'),
(33, 'trong16', 'trong16@gmail.com', NULL, '$2y$10$SXfOwyePu0iKjYvpt5uQieEoqKm.9iartkhzVc8LTVb3a7ZXy5JqS', NULL, '2021-01-10 18:14:11', '2021-01-10 18:14:11'),
(34, 'trong3', 'trong3@gmail.com', NULL, '$2y$10$MuZrHETEcu6uMcm3B3865.s7TfQQTL7DWuK9XBv2B7veKqO.AEMuW', NULL, '2021-01-10 18:26:32', '2021-01-10 18:26:32'),
(35, 'trong4', 'trong4@gmail.com', NULL, '$2y$10$IG3JtQVL/isXgl1wpMrYhe6IWfEKltfqCVFl0r2zZcGmyag98UPkO', NULL, '2021-01-10 18:29:05', '2021-01-10 18:29:05'),
(36, 'trong5', 'trong5@gmail.com', NULL, '$2y$10$WdvG29pTDsdopw8CZJxLkOzEv0B1f5NDrBewXC7sL9Mp36ewTm3zi', NULL, '2021-01-10 18:32:12', '2021-01-10 18:32:12'),
(37, 'trong6', 'trong6@gmail.com', NULL, '$2y$10$zM5btUN8Rj8ufuo5G6NlIOlIlg7OIVLTHUcqlRvsI.iglA0au/fZS', NULL, '2021-01-10 18:39:23', '2021-01-10 18:39:23'),
(38, 'trong7', 'trong7@gmail.com', NULL, '$2y$10$h9tdKOC45LE4pFx.ZokjpOwnAmIhXueRDzdU1G5B/dhg9vTYN6goS', NULL, '2021-01-10 18:49:58', '2021-01-10 18:49:58'),
(39, 'trong20', 'trong20@gmail.com', NULL, '$2y$10$jEJzdI.4bOUHYBuswes37.4dv0Kyfc9aXjlSI/bWgWzLsrtRokIKi', NULL, '2021-01-10 19:48:22', '2021-01-10 19:48:22'),
(40, 'trong21', 'trong21@gmail.com', NULL, '$2y$10$zaThwzqj3ceHU0Fnqjl5KOeSeu.F6jOcekHzoUndtS6f/QGMU4LA6', NULL, '2021-01-11 08:01:21', '2021-01-11 08:01:21'),
(41, 'trong17', 'trong17@gmail.com', NULL, '$2y$10$JuuNzy9CXH0ESFSilzZgleapa0FjWILBJgDuvfBwxJBeMwcd01QUa', NULL, '2021-01-12 00:24:50', '2021-01-12 00:24:50'),
(42, 'trong31', 'trong31@gmail.com', NULL, '$2y$10$S3uGvF4br8lY/T/xeCfpbefPN.FOzWCJdfjU0swnzdPbIQJy5tjla', NULL, '2021-01-12 02:11:52', '2021-01-12 02:11:52'),
(43, 'trong29', 'trong29@gmail.com', NULL, '$2y$10$qdTqeFIR8iIYnBPZAeNr/u/fj0kdteWLQltiJBTnCWyuduWJ9Yhdq', NULL, '2021-01-12 19:53:26', '2021-01-12 19:53:26'),
(44, 'trong50', 'trong50@gmail.com', NULL, '$2y$10$xdxVgxImmRWfKr821sVPAe3o4ca5lP43NJXkYkTwI3uiWHf5Er3Yu', NULL, '2021-01-15 00:11:41', '2021-01-15 00:11:41'),
(45, 'trong100', 'trong100@gmail.com', NULL, '$2y$10$Y1V.Bo79.qXMS60eziz0auNEfzTEvu7pd5Mu2HsaXjp1jn2DCzomu', NULL, '2021-01-18 00:47:21', '2021-01-18 00:51:47');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `category_quiz`
--
ALTER TABLE `category_quiz`
  ADD PRIMARY KEY (`category_id`,`quiz_id`),
  ADD KEY `category_quiz_quiz_id_foreign` (`quiz_id`);

--
-- Chỉ mục cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Chỉ mục cho bảng `quizzes`
--
ALTER TABLE `quizzes`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `results`
--
ALTER TABLE `results`
  ADD PRIMARY KEY (`id`),
  ADD KEY `results_user_id_foreign` (`user_id`),
  ADD KEY `results_category_id_foreign` (`category_id`);

--
-- Chỉ mục cho bảng `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `role_user`
--
ALTER TABLE `role_user`
  ADD PRIMARY KEY (`role_id`,`user_id`),
  ADD KEY `role_user_user_id_foreign` (`user_id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `quizzes`
--
ALTER TABLE `quizzes`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT cho bảng `results`
--
ALTER TABLE `results`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT cho bảng `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `category_quiz`
--
ALTER TABLE `category_quiz`
  ADD CONSTRAINT `category_quiz_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `category_quiz_quiz_id_foreign` FOREIGN KEY (`quiz_id`) REFERENCES `quizzes` (`id`);

--
-- Các ràng buộc cho bảng `results`
--
ALTER TABLE `results`
  ADD CONSTRAINT `results_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `results_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `role_user`
--
ALTER TABLE `role_user`
  ADD CONSTRAINT `role_user_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `role_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
