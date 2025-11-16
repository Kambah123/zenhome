# Image Replacement Guide

This guide shows all images used on the website and where to replace them.

## 🔄 Cache-Busting Note
All images now have `?v=2` added to force browser reload. If you update images and they still don't show, change `?v=2` to `?v=3` (or higher) in the HTML files.

---

## 📸 All Images Used

### **Logo & Navigation**
- **`images/logo.png`** - Used in:
  - Navigation bar (top)
  - Footer
  - Blog page navigation
  - **Replace with:** Your ZenDrafting logo

- **`images/hamburger.png`** - Mobile menu icon
  - **Replace with:** Hamburger menu icon (3 lines)

---

## 🏠 Hero Section (Top of Homepage)

### **Hero Images** (Lines 60, 63 in index.html)
- **`images/2.jpg`** - Left hero image
  - **Alt text:** "Residential Drafting Services - New Home Plans"
  - **Use:** New home drafting project image
  
- **`images/3.jpg`** - Right hero image
  - **Alt text:** "Residential Extension Drafting Services"
  - **Use:** Extension/renovation project image

---

## 🎨 Before/After Comparison Sliders

### **Comparison Slider #1** (Lines 445, 449 in index.html)
**Project:** "Residential Extension Project"

- **`images/5.jpg`** - BEFORE image
  - **Location:** Left side of slider
  - **Use:** Original/existing state of residential extension
  
- **`images/6.jpg`** - AFTER image
  - **Location:** Right side of slider (revealed on drag)
  - **Use:** Completed/transformed state of residential extension

### **Comparison Slider #2** (Lines 470, 474 in index.html)
**Project:** "New Home Drafting Project"

- **`images/7.jpg`** - BEFORE image
  - **Location:** Left side of slider
  - **Use:** Empty lot or existing structure before new home
  
- **`images/8.jpg`** - AFTER image
  - **Location:** Right side of slider (revealed on drag)
  - **Use:** Completed new home

**⚠️ IMPORTANT for Comparison Sliders:**
- Both images in each pair should be the SAME size and aspect ratio
- Recommended: 1920x1080 or 1600x900 (16:9 ratio)
- Images should align perfectly (same camera angle/viewpoint)
- The "after" image will be clipped/revealed as you drag the slider

---

## 📊 Experience Section Images

### **Image Grid** (Lines 213, 216, 219 in index.html)
- **`images/5.jpg`** - Left image
  - **Alt text:** "Residential Drafting Projects - New Home Plans"
  
- **`images/6.jpg`** - Center image
  - **Alt text:** "Residential Extension Drafting Services"
  
- **`images/7.jpg`** - Right image
  - **Alt text:** "Residential Drafting Services - Granny Flat Plans"

**Note:** These are the same images used in the comparison slider, so they should match your before/after pairs.

---

## 🏗️ Projects/Portfolio Section

### **Project Showcase** (Lines 372, 385, 392, 405, 412 in index.html)

- **`images/8.jpg`** - Project 1 thumbnail
  - **Project:** "Residential Extension and Alteration Project"
  
- **`images/9.jpg`** - Project 2 thumbnail
  - **Project:** "New Home Drafting Project"
  
- **`images/10.jpg`** - Project 3 thumbnail
  - **Project:** "Granny Flat Drafting Project"
  
- **`images/11.jpg`** - Project 4 thumbnail
  - **Project:** "Residential Extension and Alteration Project"
  
- **`images/12.jpg`** - Project 5 thumbnail
  - **Project:** "Residential Extension and Alteration Project"

---

## 📝 Blog Section

### **Blog Preview Cards** (Lines 566, 580, 594 in index.html)
- **`images/9.jpg`** - Blog Post 1 featured image
- **`images/10.jpg`** - Blog Post 2 featured image
- **`images/11.jpg`** - Blog Post 3 featured image

### **Blog Page** (blog.html)
- **`images/9.jpg`** - Full blog post 1 image
- **`images/10.jpg`** - Full blog post 2 image
- **`images/11.jpg`** - Full blog post 3 image

---

## 🎯 Icon Images (Feature Cards)

These are used in the numbered feature boxes (01-05):

- **`images/arrow.png`** - White arrow icon (used in cards 01, 02, 04, 05)
- **`images/arrow-black.png`** - Black arrow icon (used in card 03 with dark background)

**Note:** These are small icons, not photos. Keep them as-is unless you want custom icons.

---

## 📋 Quick Replacement Checklist

### For Comparison Sliders:
- [ ] Replace `images/5.jpg` (Before - Extension)
- [ ] Replace `images/6.jpg` (After - Extension)
- [ ] Replace `images/7.jpg` (Before - New Home)
- [ ] Replace `images/8.jpg` (After - New Home)
- [ ] Ensure all images are same dimensions
- [ ] Ensure before/after images align properly

### For Hero Section:
- [ ] Replace `images/2.jpg` (Left hero)
- [ ] Replace `images/3.jpg` (Right hero)

### For Projects:
- [ ] Replace `images/8.jpg` through `images/12.jpg`

### For Blog:
- [ ] Replace `images/9.jpg`, `images/10.jpg`, `images/11.jpg`

### For Branding:
- [ ] Replace `images/logo.png`

---

## 🔧 How to Update Images

1. **Replace the image file** in the `images/` folder with the same filename
2. **Hard refresh your browser:**
   - **Chrome/Edge:** `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
   - **Firefox:** `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac)
   - **Safari:** `Cmd + Option + R`
3. **If images still don't update**, change the version number in the HTML:
   - Find `?v=2` in image URLs
   - Change to `?v=3` (or higher)
   - Example: `images/5.jpg?v=2` → `images/5.jpg?v=3`

---

## 📐 Recommended Image Sizes

- **Hero images (2.jpg, 3.jpg):** 1920x1080px or larger
- **Comparison slider images:** 1920x1080px (16:9 ratio, same size for before/after pairs)
- **Project thumbnails:** 800x600px or larger
- **Blog images:** 1200x800px or larger
- **Logo:** 200x60px (or appropriate aspect ratio)

---

## ✅ After Replacing Images

1. Test the comparison sliders - drag to ensure images align
2. Check all pages load correctly
3. Verify images display on mobile devices
4. Clear browser cache if needed

