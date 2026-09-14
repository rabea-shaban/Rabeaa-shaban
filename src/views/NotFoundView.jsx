'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const NotFoundView = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="relative z-10 px-4 mx-auto text-center max-w-4xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-9xl font-bold gradient-text">404</h1>
          <h2 className="text-3xl font-bold text-foreground">الصفحة غير موجودة</h2>
          <p className="text-muted-foreground">عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى مكان آخر.</p>
          <div className="pt-4">
            <Button asChild size="lg" className="shadow-lg">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                العودة للصفحة الرئيسية
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundView;
